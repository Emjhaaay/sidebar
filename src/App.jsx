import { useState } from 'react'
import { Layout } from 'antd'
import { MenuUnfoldOutlined , MenuFoldOutlined } from '@ant-design/icons';
import Logo from './components/logo';
import MenuList from './components/MenuList';
import ToggleThemeButton from './components/ToggleThemeButton';

const {Header, Sider} = Layout;
function App() {
   const [darkTheme, setDarkTheme] = useState(true);
   const[collapsed, setCollapsed] = useState(false);

   const toggleTheme = () =>{
    setDarkTheme(!darkTheme);
   };
  return (
    <>
      <Layout>
        <Sider theme={darkTheme ? 'dark' : 'light'} className='sidebar'>
         <Logo />
         <MenuList darkTheme = {darkTheme} />
         <ToggleThemeButton darkTheme = {darkTheme}
         toggleTheme={toggleTheme}/>
        </Sider>
      </Layout>
    </>
  )
}

export default App
