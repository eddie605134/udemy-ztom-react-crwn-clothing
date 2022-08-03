import Directory from '../../components/directory/directory.component.jsx'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (<>
    <Directory />
    <Outlet></Outlet>
  </>
  );
}

export default Home;
