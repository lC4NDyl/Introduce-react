import logo from './logo.svg';
import './App.css';
import Profilepic from './img/profile.jpg';

function App() {
  
	return (
    <><div>
        <div class="container bootstrap snippets bootdey">
            <div class="panel-body inf-content">
                <div class="row">
                    <div class="col-md-4">
                        <img style={{ width: 400, height: 400 }} src={Profilepic} alt="Profilepic" />
                    </div>
                    <div class="col-md-6">
                        <strong>Information</strong><br />
                        <br></br>
                        <div class="table-responsive">
                            <table class="table table-user-information">
                                <tbody>
                                    <tr>
                                        <td>
                                            <strong>
                                                <span class="glyphicon glyphicon-asterisk text-primary"></span>
                                                Identificacion
                                            </strong>
                                        </td>
                                        <td class="text-primary">
                                            6303600
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>
                                                <span class="glyphicon glyphicon-user  text-primary"></span>
                                                Name
                                            </strong>
                                        </td>
                                        <td class="text-primary">
                                            Kritsakorn
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>
                                                <span class="glyphicon glyphicon-cloud text-primary"></span>
                                                Lastname
                                            </strong>
                                        </td>
                                        <td class="text-primary">
                                            Chansiri
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <strong>
                                                <span class="glyphicon glyphicon-bookmark text-primary"></span>
                                                Username
                                            </strong>
                                        </td>
                                        <td class="text-primary">
                                            Kritsiri159
                                        </td>
                                    </tr>


                                    <tr>
                                        <td>
                                            <strong>
                                                <span class="glyphicon glyphicon-eye-open text-primary"></span>
                                                Role
                                            </strong>
                                        </td>
                                        <td class="text-primary">
                                            Student
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>
                                                <span class="glyphicon glyphicon-envelope text-primary"></span>
                                                Email
                                            </strong>
                                        </td>
                                        <td class="text-primary">
                                            Kritsakorn.c63@gmail.com
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>
                                                <span class="glyphicon glyphicon-calendar text-primary"></span>
                                                Birth date
                                            </strong>
                                        </td>
                                        <td class="text-primary">
                                            18 Oct 2001
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>
                                                <span class="glyphicon glyphicon-calendar text-primary"></span>
                                                Favorite thing
                                            </strong>
                                        </td>
                                        <td class="text-primary">
                                            Game
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div></>
);
}

export default App;
