import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../auth/authContext";
import { DashboardRoutes } from "../../routers/DashboardRoutes";

describe('Pruebas en DashboarRoutes', () => { 

  const contextValue = {
    user: {
      logged: true,
      name: 'Agustin'
    }
  }
  test('Debe de mostrarse correctamente - Marvel', () => {  
    const wrapper = mount(
    <AuthContext.Provider value={contextValue}>
      {/* El MemoryRouter sirve para que pueda leer correctamente el useNavigator() */}
      <MemoryRouter initialEntries={ ['/'] }>
        <DashboardRoutes /> 
      </MemoryRouter>
    </AuthContext.Provider>
    )

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.text-info').text().trim()).toBe('Agustin');
    expect(wrapper.find('h1').text().trim()).toBe('Marvel Screen');

  })

  test('Debe de mostrarse correctamente - DC', () => {  
    const wrapper = mount(
    <AuthContext.Provider value={contextValue}>
      {/* El MemoryRouter sirve para que pueda leer correctamente el useNavigator() */}
      <MemoryRouter initialEntries={ ['/dc'] }>
        <DashboardRoutes /> 
      </MemoryRouter>
    </AuthContext.Provider>
    )
    
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('h1').text().trim()).toBe('Dc Screen');
  })
})