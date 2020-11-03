class ToggleForms extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      name: '',
      email: '',
      password: '',
      addressLine1: '',
      addressLine2: '',
      addressCity: '',
      addressState: '',
      addressZipCode: '',
      creditCardNo: '',
      expiryDate: '',
      CVV: '',
      billingZipCode: '',
    })

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    let s = this.state;
    let info = {};
    switch (this.props.checkoutStatus) {
      case 'F1': {
        info = { name: s.name, password: s.password, email: s.email }
        break;
      }
      case 'F2': {
        info = { addressLine1: s.addressLine1, addressLine2: s.addressLine2, addressCity: s.addressCity, addressState: s.addressState, addressZipCode: s.addressZipCode }
        break;
      }
      case 'F3': {
        info = { creditCardNo: s.creditCardNo, expiryDate: s.expiryDate, CVV: s.CVV, billingZipCode: s.billingZipCode }
        break;
      }
      default: {
        this.props.nextStep(this.props.checkoutStatus);
      }
    }
    console.log(info);
    this.props.submit(info);
  }

  handleInput(event) {
    this.setState({
      [event.target.name]: event.target.value
    })

  }

  render() {
    let text = '';
    let s = this.state;
    let showOrHideAll = 'hideMe';
    let showOrHideDetails = 'hideMe';
    let [box1, box2, box3, box4, box5] = ['', '', '', '', '']
    let [formBox4Class, formBox5Class] = ["hideMe formBox4", "hideMe formBox5"];
    switch (this.props.checkoutStatus) {
      case 'F1': {
        text = 'Please enter your login details:';
        [box1, box2, box3, box4, box5] = ['name', 'email', 'password', null, null];
        showOrHideAll = 'showMe';
        break;
      }
      case 'F2': {
        text = 'Please enter your shipping details:';
        [box1, box2, box3, box4, box5] = ['addressLine1', 'addressLine2', 'addressCity', 'addressState', 'addressZipCode'];
        [formBox4Class, formBox5Class] = ["showMe formBox4", "showMe formBox5"];
        showOrHideAll = 'showMe';
        break;
      }
      case 'F3': {
        text = 'Please enter your credit card details:';
        [box1, box2, box3, box4, box5] = ['creditCardNo', 'expiryDate', 'CVV', 'billingZipCode', null];
        [formBox4Class, formBox5Class] = ["showMe formBox4", "hideMe formBox5"];
        showOrHideAll = 'showMe';
        break;
      }
      case 'F4': {
        text = 'Please confirm your purchase details:';
        showOrHideAll = 'hideMe';
        showOrHideDetails = 'showMe'
        break;
      }
      case 'F0':
      default: {
        text = 'Welcome to self-checkout! Please finalize your purchase for today.';
        [box1, box2, box3, box4, box5] = ['', '', '', '', ''];
        break;
      }
    }

    return (
      <div>
        <form onSubmit={this.handleSubmit}>{text}
          <div className={showOrHideAll}>
            <span className={"formBox1"}>{box1}
              <input name={box1} value={this.state[box1]} onChange={this.handleInput}></input>
            </span>
            <span className="formBox2">{box2}
              <input name={box2} value={this.state[box2]} onChange={this.handleInput}></input>
            </span>
            <span className="formBox3">{box3}
              <input name={box3} value={this.state[box3]} onChange={this.handleInput}></input>
            </span>
          </div>
          <span className={formBox4Class}>{box4}
            <input name={box4} value={this.state[box4]} onChange={this.handleInput}></input>
          </span>
          <span className={formBox5Class}>{box5}
            <input name={box5} value={this.state[box5]} onChange={this.handleInput}></input>
          </span>
          <span className={showOrHideDetails}>
            <ul>
              <li>{s.name}</li>
              <li>{s.email}</li>
              <li>{s.addressLine1} {s.addressLine2}, {s.addressCity}, {s.addressState}, {s.addressZipCode}</li>
              <li>{s.creditCardNo}, {s.expiryDate}, {s.CVV}, {s.billingZipCode} </li>
            </ul>
          </span>
          <button className="next" name={this.props.checkoutStatus}>{this.props.checkoutStatus === 'F4' ? 'Purchase' : 'Next Step'}</button>
        </form>
      </div>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      checkoutStatus: '',
      id: ''
    })

    this.nextButton = this.nextButton.bind(this);
    this.handleSubmission = this.handleSubmission.bind(this);
  }

  componentDidMount() {
    this.setState({
      checkoutStatus: 'F0'
    })
  }

  nextButton(status) {
    let newStatus = 'F' + (parseInt(status.slice(1)) + 1);
    if (newStatus === 'F5') {
      newStatus = 'F0';
    }
    console.log('newStatus', newStatus);
    this.setState({
      checkoutStatus: newStatus,
    })

  }

  handleSubmission(submission) {
    console.log('sending submission', submission)
    switch(this.state.checkoutStatus) {
      case 'F1': {
        console.log('on case 1!')
        axios.post('/users', {
          submission
        })
        .then((response) => {
          console.log('post received!', response.data._id);
          this.state.id = response.data._id
          this.nextButton(this.state.checkoutStatus);
        })
        .catch((err)=> {
          alert('could not submit request!', err)
        })
        break;
      }
      case 'F2': {
        console.log('on case 2!', this.state.id)
        axios.put('/address', {
          id: this.state.id,
          submission: submission
        })
        .then((response) => {
          console.log('put received!', response)
          this.nextButton(this.state.checkoutStatus);
        })
        .catch((err)=> {
          alert('could not submit request!', err)
        })
        break;
      }
      case 'F3': {
        axios.put('/creditcard', {
          id: this.state.id,
          submission: submission
        })
        .then((response) => {
          console.log('put received!', response)
          this.nextButton(this.state.checkoutStatus);
        })
        .catch((err)=> {
          alert('could not submit request!', err)
        })
        break;
      }
      default: {
        console.log('nothing sent')
      }
    }
  }



  render() {
    return (
      <div>
        <ToggleForms checkoutStatus={this.state.checkoutStatus} submit={this.handleSubmission} nextStep={this.nextButton} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))


