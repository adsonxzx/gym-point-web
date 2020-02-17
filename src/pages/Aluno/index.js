import React, { useState, useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import {
  Container,
  Info,
  ButtonCreate,
  ButtonCancel,
  FormBox,
} from '../../styles/global';
import Table from '../../componets/Table';
import Filter from '../../componets/Filter';
import api from '../../services/api';
import Pagination from '../../componets/Pagination';

const schema = Yup.object().shape({
  nome: Yup.string().required('Infome o nome'),
  email: Yup.string()
    .email('E-mail inválido')
    .required('Infome o email'),
  peso: Yup.string(),
  altura: Yup.string(),
  idade: Yup.string(),
});

export default function Aluno() {
  const [showForm, setShowForm] = useState(false);
  const [students, setStudents] = useState([]);
  const [studentsPage, setStudentsPage] = useState([]);
  const [initialData, setInitialData] = useState({});
  const [formEdition, setFormEdition] = useState(false);
  const [pagination, setPagination] = useState(1);
  const [numPagination, setNumPagination] = useState([]);

  useEffect(() => {
    async function getList() {
      const response = await api.get(`students`);
      setStudents(response.data);

      const totalPages = Math.ceil(response.data.length / 10);
      const numPages = [];
      for (let i = 1; i <= totalPages; i += 1) {
        numPages.push(i);
      }

      setNumPagination(numPages);
    }

    getList();
  }, []);

  useEffect(() => {
    async function getList() {
      const response = await api.get(`students/?page=${pagination}`);
      setStudentsPage(response.data);
    }

    getList();
  }, [pagination]);

  function handleShowForm() {
    setShowForm(true);
  }

  async function handleSubmit(data) {
    try {
      if (formEdition) {
        const response = await api.put(`/students/${initialData.id}`, data);
        setStudents([...students, response.data]);
        setShowForm(false);
        toast.success('Cadastro realizado com sucesso!');
      } else {
        const response = await api.post('/students', data);
        setStudents([...students, response.data]);
        setShowForm(false);
        toast.success('Cadastro realizado com sucesso!');
      }
    } catch (error) {
      toast.error('Error ao cadastrar');
    }
  }

  async function handleEditForm(studentId) {
    setShowForm(true);

    const response = await api.get(`/students/${studentId}`);
    const { id, nome, email, peso, altura, idade } = response.data;

    setInitialData({ id, nome, email, peso, altura, idade });
    setFormEdition(true);
  }

  function prevPage() {
    if (pagination !== 1) {
      setPagination(pagination - 1);
    }
  }

  function nextPage() {
    if (pagination !== Math.ceil(students.length / 10)) {
      setPagination(pagination + 1);
    }
  }

  function handlePagination(page) {
    if (page !== pagination) {
      setPagination(page);
    }
  }

  return (
    <Container>
      <h2>Gerenciando Alunos</h2>

      <Info>
        <div>
          <span>Total Alunos</span>
          <strong>{students.length}</strong>
        </div>

        <div>
          <span>Alunos Ativos</span>
          <strong>950</strong>
        </div>

        <div>
          <span>Matrículas do Mês</span>
          <strong>120</strong>
        </div>

        <div>
          <span>Matrículas do MêS</span>
          <strong>120</strong>
        </div>
      </Info>

      {!showForm ? (
        <div>
          <Filter handleShowForm={handleShowForm} options />

          <Table list={studentsPage} handleEditForm={handleEditForm} />

          {/* Pagination */}
          <Pagination
            numPagination={numPagination}
            prevPage={prevPage}
            nextPage={nextPage}
            handlePagination={handlePagination}
            pagination={pagination}
          />
        </div>
      ) : (
        <FormBox>
          <h2>Cadastro de Aluno</h2>
          <Form
            schema={schema}
            onSubmit={handleSubmit}
            initialData={initialData}
          >
            <div>
              <label htmlFor="nome">Nome</label>
              <Input type="text" name="nome" id="nome" placeholder="nome" />
            </div>

            <div>
              <label htmlFor="email">E-mail</label>
              <Input type="text" name="email" placeholder="email@email.com" />
            </div>

            <div className="col-3">
              <label htmlFor="name">Idade</label>
              <Input type="text" name="idade" placeholder="idade" />
            </div>

            <div className="col-3">
              <label htmlFor="name">Peso</label>
              <Input type="text" name="peso" placeholder="ex. 1.8" />
            </div>

            <div className="col-3">
              <label htmlFor="altura">Altura</label>
              <Input type="text" name="altura" placeholder="ex. 1.6" />
            </div>

            <div>
              <ButtonCancel type="button" onClick={() => setShowForm(false)}>
                Cancelar
              </ButtonCancel>
              <ButtonCreate type="submit">Salvar</ButtonCreate>
            </div>
          </Form>
        </FormBox>
      )}
    </Container>
  );
}
