import React,{Component} from 'react';


class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: "",
            lastName: "",
            password: "",
            gender: "",


        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    namehandler = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    lastNamehandler = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }
    passwordhandler = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    genderhandler = (event) => {
        this.setState({
            gender: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`${this.state.firstName} ${this.state.lastName} Giriş Başarılı`)
        console.log(this.state);
        this.setState({
            firstName: "",
            lastName: "",
            password: '',
            gender: "",
        })
     event.preventDefault()

    }




    render() {
        return (
            <div>

                <form onSubmit={this.handleSubmit}>

                    <input type="text" value={this.state.firstName} onChange={this.namehandler} placeholder="Adınız" /><br />
                     <input type="text" value={this.state.lastName} onChange={this.lastNamehandler} placeholder="Soyadınız" /><br />
                     <input type="password" value={this.state.password} onChange={this.passwordhandler} placeholder="Şifreniz" /><br />
                    <select onChange={this.genderhandler} defaultValue="Cinsiyet Seç">
                        <option defaultValue>Cinsiyet Seç</option>
                        <option value="male">Erkek</option>
                        <option value="female">Kadın</option>
                    </select><br />
                    <input type="submit" value="Giriş" />
                </form>

            </div>

        )
    }
}

export default Form
