import useSWR from 'swr';
//Agregar tabla con las starships sacadas de la API. Mostrar para cada starship: name, model, manufacturer, passengers, cantidad de films. Codear en un componente aparte tal como <Planets>.
import { swGet } from '../../utils/fetcher';
import Table from '../Table';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Model',
    dataIndex: 'model',
    key: 'model',
  },
  {
    title: 'Manufacturer',
    dataIndex: 'manufacturer',
    key: 'manufacturer',
  },
  {
    title: 'Passengers',
    dataIndex: 'passengers',
    key: 'passengers',
    render: (passengers: string) =>
      parseInt(passengers)
        ? parseInt(passengers).toLocaleString('es-AR')
        : passengers,
  },
  {
    title: 'Films count',
    dataIndex: 'films',
    key: 'films_count',
    render: (films: string[]) => films.length,
  },
];

const Planets = () => {
  const { data, error } = useSWR('/starships', swGet);

  if (error) {
    return <div className="px-2">Oh oh!</div>;
  }
  if (!data) {
    return <div className="px-2">Loading...</div>;
  }

  return (
    <div>
      <Table columns={columns} data={data.results}/>
    </div>
  );
};

export default Planets;
