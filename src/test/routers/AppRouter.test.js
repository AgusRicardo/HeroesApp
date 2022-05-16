import { mount } from "enzyme";
import { AuthContext } from "../../auth/authContext";
import { AppRouter } from "../../routers/AppRouter";

describe('Pruebas en AppRouter', () => {  
  test('Debe de mostrar el login si no está autenticado', () => {  
    // Creamos un contexto
    const contextValue = {
      user: {
        logged: false
      }
    }

    const wrapper = mount(
      <AuthContext.Provider value={contextValue}> 
        <AppRouter/>
      </AuthContext.Provider>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('h1').text().trim()).toBe('Login Screen');
  })

  test('Debe de mostrar el componente de marvel si está autenticado', () => {  
    // Creamos un contexto
    const contextValue = {
      user: {
        logged: true,
        name: 'Agustin'
      }
    }

    const wrapper = mount(
      <AuthContext.Provider value={contextValue}> 
        <AppRouter/>
      </AuthContext.Provider>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.navbar').exists()).toBe(true);
  })


})