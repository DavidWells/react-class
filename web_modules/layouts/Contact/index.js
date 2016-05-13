import React, { Component, PropTypes } from "react"
import axios from 'axios'
import styles from './Contact.css'
import Page from "../Page"

/**
 *       jQuery(document).ready(function($) {

       jQuery("#contact-send").on('click', function (e) {
        e.preventDefault()
        var name = jQuery("#name").val()
        var email = jQuery("#email").val()
        var comment = jQuery("#comment").val()
        var company = jQuery("#company").val()
        var phone = jQuery("#phone").val()
        var re = /^([\w_\.\-\+])+\@([\w\-]+\.)+([\w]{2,10})+$/
        if (email == '' || !re.test(email)) {
          alert('please enter a valid email address')
          return false
        }
        if(email && comment) {
          var data = {
             "fields": {
               "Name": name,
               "Message": comment,
               "Email": email,
               "Company": company,
               "Phone": phone
             }
          }
          axios({
            method: 'post',
            url: 'https://api.airtable.com/v0/appRokysVIYeDAEgA/Contact%20Us',
            data: data,
            headers: {
             'Authorization': 'Bearer keyhIGB1sKiwklGzU',
            },
          }).then(function(response) {
              // console.log(response.data);
              // console.log(response.status);
              // console.log(response.statusText);
              // console.log(response.headers);
              // console.log(response.config);
              window.location.href = '/thanks.html'
         });
        } else {
          alert('Please a message')
        }

       });

      });
 */


export default class Contact extends Component {

  constructor (props, context) {
    super(props, context)
    this.state = {
      name: '',
      email: '',
      phone: '',
      company: '',
      text: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange (e) {
    console.log(e.target.value)
    console.log(e.target.innerText)
    console.log(e.target.dataset)
    const value = (e.target.value !== '') ? e.target.value : e.target.innerText
    this.setState({
      [`${e.target.dataset.input}`]: value
    })
  }
  handleSubmit(e) {
    e.preventDefault()
    const { name, email, text, company, phone } = this.state
    var re = /^([\w_\.\-\+])+\@([\w\-]+\.)+([\w]{2,10})+$/
    if (email === '' || !re.test(email)) {
      alert('please enter a valid email address')
      return false
    }
    if (email && text) {
      var data = {
         "fields": {
           "Name": name,
           "Message": text,
           "Email": email,
           "Company": company,
           "Phone": phone
         }
      }
      axios({
        method: 'post',
        url: 'https://api.airtable.com/v0/appRokysVIYeDAEgA/Contact%20Us',
        data: data,
        headers: {
         'Authorization': 'Bearer keyhIGB1sKiwklGzU',
        },
      }).then(function(response) {
          // console.log(response.data);
          // console.log(response.status);
          // console.log(response.statusText);
          // console.log(response.headers);
          // console.log(response.config);
          window.location.href = '/thanks'
     });
    } else {
      alert('Please a message')
    }
  }
  render() {
    return (
      <Page { ...this.props} >
          <div className={styles.wrapper + " docs-example docs-example-htmlForms"}>
            <form onSubmit={this.handleSubmit}>
              <div className="row">
                <div className="six columns">
                  <label htmlFor="exampleEmailInput">Name</label>
                  <input onChange={this.handleChange} data-input='name' className="u-full-width" type="text" value={this.state.name}  />
                </div>
                <div className="six columns">
                  <label htmlFor="exampleEmailInput">Email</label>
                  <input onChange={this.handleChange} className="u-full-width" data-input='email' type="email"  value={this.state.email}  />
                </div>
              </div>

              <div className="row">
                <div className="six columns">
                  <label htmlFor="exampleEmailInput">Company</label>
                  <input onChange={this.handleChange} data-input='company' className="u-full-width" type="text" value={this.state.company}/>
                </div>
                <div className="six columns">
                   <label htmlFor="exampleEmailInput">Phone</label>
                  <input onChange={this.handleChange} data-input='phone' className="u-full-width" type="text" value={this.state.phone} />
                </div>
              </div>
              <label htmlFor="exampleMessage">Message</label>
              <textarea onChange={this.handleChange} data-input='text' className="u-full-width" placeholder="Leave your message here!" value={this.state.text} />

              <input
                className="button-primary"
                type="submit"
              />
            </form>
          </div>
      </Page>
    )
  }
}
