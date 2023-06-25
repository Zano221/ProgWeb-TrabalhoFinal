import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import axios from 'axios';
import './VitimaPage.css';

async function listarVitimas() {
  try {
    const vitimaList = await axios.get('http://localhost:6969/vitimas/');
    console.log(vitimaList.data)
    return vitimaList.data;
  } catch (e) {
    console.log(e);
    throw e;
  }
}

export default function VitimaPage() {
  const [vitimaList, setVitimaList] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchVitimas = async () => {
      try {
        const data = await listarVitimas();
        setVitimaList(data);
      } catch (e) {
        navigate('/', { replace: true });
      }
    };

    fetchVitimas();
  }, [navigate]);

  return (
    <section id="vitima-page">
      <Header />
      <h1>Lista de Vítimas</h1>

      {vitimaList ? (
        <table id="tabela-vitimas">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Idade</th>
              <th>Cidade</th>
            </tr>
          </thead>
          <tbody>
            {vitimaList.map((item, index) => (
              <tr key={index}>
                <td>{item.NOME_VITI}</td>
                <td>{item.CIDADE_VITI}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Carregando...</p>
      )}

      <Footer />
    </section>
  );
}
