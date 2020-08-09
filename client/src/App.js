import React, { useEffect, lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import Spinner from './components/Spinner/Spinner.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';

import store from './redux/store';
import { loadUser } from './redux/user/user-actions';
import setAuthToken from './utils/setAuthToken';

import './App.css';

//Components
const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const RegisterPage = lazy(() => import('./pages/register/register.component'));
const LoginPage = lazy(() => import('./pages/login/login.component'));
const DashboardPage = lazy(() => import('./pages/dashboard/dashboard.component'));
const FormProfile = lazy(() => import('./pages/form-profile/form-profile.component'));
const AddEducationPage = lazy(() => import('./pages/education/education.component'));
const AddExperiencePage = lazy(() => import('./pages/experience/experience.component'));
const EditExperience = lazy(() => import('./pages/edit-experience/edit-experience.component'));
const EditEducation = lazy(() => import('./pages/edit-education/edit-education.component'));
const SearchStudentsPage = lazy(() => import('./pages/students/students.component'));
const StudentProfile = lazy(() => import('./pages/student-profile/student-profile.component'));
const PostsPage = lazy(() => import('./pages/posts/posts.component'));
const PostPage = lazy(() => import('./pages/post/post.component'));
const SendMessagePage = lazy(() => import('./pages/send-message/send-message.component'));
const MessagesPage = lazy(() => import('./pages/messages/messages.component'));
const MessagePage = lazy(() => import('./pages/message/message.component'));



const App = () => {
  useEffect(() => {
    setAuthToken(localStorage.token);
    store.dispatch(loadUser());
  }, []);
  
  return (
    <div>
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={ <Spinner />}>
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
          </Suspense>
        </ErrorBoundary>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
