import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeDetail from './components/EmployeeDetail';

const RouterComponent = () => {
    return (
        <Router sceneStyle={{ paddingTop: 65 }}>
            <Scene key="auth" initial>
                <Scene key="login" component={LoginForm} title="Please Login" initial />
            </Scene>

            <Scene key="main">
                <Scene
                    key="employeeList"
                    component={EmployeeList}
                    title="Employees"
                    initial
                    rightTitle="Add"
                    onRight={() => Actions.employeeDetail()}
                />
                < Scene key="employeeDetail" component={EmployeeDetail} title="Employee" />
            </Scene>
        </Router>
    );
};

export default RouterComponent;
