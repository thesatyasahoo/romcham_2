import React, { useState, useEffect } from 'react'
import { FaFile, FaImages } from 'react-icons/fa'
import styles from './styles.module.css'
import { Link } from 'react-router-dom'
import Select from 'react-select'
import axios from 'axios'
import { Button } from 'react-bootstrap'

const EditEvent = () => {
  const [addmembersList, setAddmembersList] = useState([])
  const [name, setName] = useState('')
  const [location, setLocation] = useState('')
  //   const [eventdate, setEventdate] = useState('')
  const [startTime, setStartTime] = useState('')
  const [endTime, setEndTime] = useState('')
  const [organize, setOrganize] = useState([])
  const [description, setDescription] = useState('')
  const [mobileNo, setMobileNo] = useState(0)
  const [addmembers, setAddmembers] = useState([])

  const handleChange = (value) => {
    setAddmembers(value)
  }

  useEffect(() => {
    axios
      .get('http://134.209.222.109:3000/user/get-user-list', {
        headers: { 'Content-Type': 'application/json' },
        Authorization: `read`,
        // withCredentials: true,
      })
      .then((response) => {
        const sample = []
        for (let i = 0; i < response.data.length; i++) {
          sample.push(response.data[i].user)
        }
        setAddmembersList(sample)
        console.log(response.data)
      })
  }, [])

  //   const submit = () => {}

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(mobileNo, name, location, startTime, endTime, description, organize)
    try {
      axios
        .patch(
          `http://134.209.222.109:3000/user/update-event/`,
          JSON.stringify({
            addmembers,
            name,
            mobileNo,
            location,
            organize,
            startTime,
            endTime,
            description,
          }),

          {
            headers: { 'Content-Type': 'application/json' },
            // withCredentials: true,
          },
        )
        .then((res) => {
          console.log(res.data)
          alert('Asssigned sucessfully!')
        })
    } catch (error) {
      if (error) {
        alert('something went wrong!')
      }
      console.log(error)
    }
  }
  return (
    <>
      <div className={`card ${styles.card}`}>
        <div className={`card-body`}>
          <h5
            className={`form-label ${styles.eventLabel}`}
            style={{ color: 'black', fontWeight: '500' }}
          >
            Edit event
          </h5>
          <label className={`${styles.eventLabel}`}>Add Members</label>
          <Select
            isMulti={true}
            className="form-control"
            value={addmembers.item}
            onChange={(value) => handleChange(value)}
            options={addmembersList}
            getOptionLabel={(option) => option}
            getOptionValue={(option) => option}
          />

          <div className="row mt-5">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <div>
                <label className={`form-label ${styles.eventLabel}`}>event name</label>

                <input
                  type="text"
                  className={`form-control ${styles.eventInput}`}
                  placeholder="Event Name"
                  onChange={(e) => {
                    setName(e.target.value)
                  }}
                  value={name}
                />
              </div>
              <div className="row mt-3">
                <label className={`form-label ${styles.eventLabel}`}>start</label>

                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div>
                    <input
                      type="date"
                      className={`form-control mt-1 ${styles.eventInput}`}
                      placeholder="Event Name"
                      onChange={(e) => {
                        setStartTime(e.target.value)
                      }}
                      value={startTime}
                    />
                  </div>
                </div>
                {/* <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div>
                    <input
                      type="date"
                      className={`form-control mt-1 ${styles.eventInput}`}
                      placeholder="Event Name"
                    />
                  </div>
                </div> */}
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <div>
                <label className={`form-label ${styles.eventLabel}`}>location</label>

                <input
                  type="text"
                  className={`form-control ${styles.eventInput}`}
                  placeholder="Type Location..."
                  onChange={(e) => {
                    setLocation(e.target.value)
                  }}
                  value={location}
                />
              </div>

              <div className="row mt-3">
                <label className={`form-label ${styles.eventLabel}`}>end</label>

                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div>
                    <input
                      type="date"
                      className={`form-control mt-1 ${styles.eventInput}`}
                      placeholder="Event Name"
                      onChange={(e) => {
                        setEndTime(e.target.value)
                      }}
                      value={endTime}
                    />
                  </div>
                </div>
                {/* <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div>
                    <input
                      type="date"
                      className={`form-control mt-1 ${styles.eventInput}`}
                      placeholder="Event Name"
                    />
                  </div>
                </div> */}
              </div>
            </div>
          </div>
          <div className="mt-3" style={{ position: 'relative' }}>
            <div className={`${styles.faupload}`}>
              <FaFile className={`${styles.FaFile}`} />
            </div>
            <textarea
              className={`form-control ${styles.textarea}`}
              placeholder="Type here..."
              onChange={(e) => {
                setDescription(e.target.value)
              }}
              value={description}
            ></textarea>
          </div>

          <div className="row mt-5">
            <label className={`form-label ${styles.eventLabel}`}>organizer deatils</label>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <div>
                <input
                  type="text"
                  className={`form-control ${styles.eventInput}`}
                  placeholder="Event Email address"
                  onChange={(e) => {
                    setOrganize(e.target.value)
                  }}
                  value={organize}
                />
              </div>

              <div className="c1">
                <div className="form-check form-switch">
                  <input className={`form-check-input ${styles.eventRadio}`} type="checkbox" />
                </div>
                <div>
                  <label
                    className={`form-label ${styles.eventLabel}`}
                    style={{ color: 'black', fontWeight: '500' }}
                  >
                    capture attendance
                  </label>
                </div>
              </div>
            </div>

            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <div>
                <input
                  type="text"
                  className={`form-control ${styles.eventInput}`}
                  placeholder="phone"
                  onChange={(e) => {
                    setMobileNo(e.target.value)
                  }}
                  value={mobileNo}
                />
              </div>

              <div className="c1">
                <div className="form-check form-switch">
                  <input
                    className={`form-check-input ${styles.eventRadio}`}
                    type="checkbox"
                    style={{ left: '17rem' }}
                  />
                </div>
                <div>
                  <label
                    className={`form-label ${styles.eventLabel}`}
                    style={{ color: 'black', fontWeight: '500' }}
                  >
                    add external registration link
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div style={{ textAlign: 'right' }}>
            {/* <Link className={`btn ${styles.btn}`} to="">
              save & preview
            </Link> */}
            <Button onClick={onSubmit} className={`btn ${styles.btn}`}>
              save & preview
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default EditEvent