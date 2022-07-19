import React from 'react'

const SurveyList = () => {
    const [name, setName] = useState("");
    const [select, setSelect] = useState("");
    const [phone, setPhone] = useState("");
    const [passport, setPassport] = useState("");
    const [booked, setBooked] = useState(false);
  
    const onChangeName = (e) => {
      setName({ name: e.target.value });
    };
    const onChangeSelect = (e) => {
      setEmail({ select: e.target.value });
    };
    const onChangePhone = (e) => {
      setPhone({ phone: e.target.value });
    };
    const onChangePassport = (e) => {
      setPassport({ passport: e.target.value });
    };
  
    const onSubmit = (e) => {
      e.preventDefault();
      const bookingData = {
        name: name,
        email: select,
        phone: phone,
        passport: passport,
      };
      console.log(bookingData);
  
      axios
        .post("http://localhost:3000/add", bookingData)
        .then((res) => {
          console.log(res.data);
          setName(name);
          setSelect(select);
          setPhone(phone);
          setPassport(passport);
        })
        .catch((error) => {
          console.log(error);
        });
      setBooked(true);
    };

    return (
        <div className='container'>
            <form >
                <div className="form-group">
                    <label for="exampleFormControlInput1">Name</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" name='name' onChange={onChangeName} placeholder="Enter your name" />
                </div>
                <div className="form-group">
                    <label for="exampleFormControlSelect1" >Which option best describes you?</label>
                    <select className="form-control" id="exampleFormControlSelect1" onChange={onChangeSelect}>
                        <option name='select'>Student</option>
                        <option>Intern</option>
                        <option>Professional</option>
                        <option>Other:<input type="text" className="form-control" id="exampleFormControlInput1" />
                        </option>
                        <option>5</option>
                    </select>
                </div>
                <div className="form-group">
                    <label for="exampleFormControlSelect2">Example multiple select</label><br />
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                        <label class="form-check-label" for="inlineRadio1">1</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                        <label class="form-check-label" for="inlineRadio2">2</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
                        <label class="form-check-label" for="inlineRadio3">3 </label>
                    </div>
                </div>
                <div className="form-group">
                    <label for="exampleFormControlTextarea1">Example textarea</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button type="button" class="btn btn-info">Info</button>
            </form>
        </div>
    )
}

export default SurveyList;