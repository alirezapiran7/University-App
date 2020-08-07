import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';

//Components
import HomePage from './pages/homepage/homepage.component';
import RegisterPage from './pages/register/register.component';
import LoginPage from './pages/login/login.component';
import DashboardPage from './pages/dashboard/dashboard.component';
import FormProfile from './pages/form-profile/form-profile.component';
import AddEducationPage from './pages/education/education.component';
import AddExperiencePage from './pages/experience/experience.component';
import EditExperience from './pages/edit-experience/edit-experience.component';
import EditEducation from './pages/edit-education/edit-education.component';
import SearchStudentsPage from './pages/students/students.component';
import StudentProfile from './pages/student-profile/student-profile.component';
import PostsPage from './pages/posts/posts.component';
import PostPage from './pages/post/post.component';
import SendMessagePage from './pages/send-message/send-message.component';
import MessagesPage from './pages/messages/messages.component';
import MessagePage from './pages/message/message.component';

import store from './redux/store';
import { loadUser } from './redux/user/user-actions';
import setAuthToken from './utils/setAuthToken';

import './App.css';

const App = () => {
  useEffect(() => {
    setAuthToken(localStorage.token);
    store.dispatch(loadUser());
  }, []);
  
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/estudantes' component={SearchStudentsPage} />
        <Route exact path='/registrar' component={RegisterPage} />
        <Route exact path='/logar' component={LoginPage} />
        <Route exact path='/perfil/:id' component={StudentProfile} />
        <PrivateRoute exact path='/dashboard' component={DashboardPage} />
        <PrivateRoute exact path="/criar-perfil" component={FormProfile} />
        <PrivateRoute exact path="/editar-perfil" component={FormProfile} />
        <PrivateRoute exact path="/adicionar-experiencia" component={AddExperiencePage} />
        <PrivateRoute exact path="/adicionar-educacao" component={AddEducationPage} />
        <PrivateRoute exact path="/editar-experiencia/:exp_id" component={EditExperience} />
        <PrivateRoute exact path="/editar-educacao/:edu_id" component={EditEducation} />
        <PrivateRoute exact path="/postagens" component={PostsPage} />
        <PrivateRoute exact path="/postagens/:id" component={PostPage} />
        <PrivateRoute exact path="/enviar-mensagem/:id" component={SendMessagePage} />
        <PrivateRoute exact path="/mensagens" component={MessagesPage} />
        <PrivateRoute exact path="/mensagens/:id" component={MessagePage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
