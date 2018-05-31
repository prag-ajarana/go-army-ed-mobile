import React from 'react'
import { hot } from 'react-hot-loader'
import { NavLink, Switch, Route } from 'react-router-dom'

const Enroll = () => {
  window.scrollTo(0, 0)
  
  return (
    <main>

      <article className="commonForm">
        <h1>Request TA</h1>

        <section id="enrollSection" className="requestTaForm">
          <article>
            <section className="titleSection longSection">
              <div>
                {/* <FontAwesomeIcon className="schoolIcon" icon={school} /> */}
                <label><strong>Confirm Enrollment</strong></label>
              </div>
              {/* <span>College of William & Mary</span> */}
            </section>

            <section className="longSection">
              <label>Description</label> <span>Principles of Financial Accounting</span>
            </section>

            <section>
              <label>GoArmyEd Class Number</label> <span>43021</span>
            </section>

            <section>
              <label>Subject</label> <span>ACCT</span>
            </section>

            <section>
              <label>Catalog Number</label> <span>2301</span>
            </section>

            {/* <section>
              <label>Section</label> <span>C078</span>
            </section> */}

            <section>
              <label>Semester Hours</label> <span>3</span>
            </section>
{/*
            <section>
              <label>Class Type</label> <span>TA</span>
            </section> */}

            <section>
              <label>Start Date</label> <span>08/27/2018</span>
            </section>

            <section>
              <label>End Date</label> <span>12/08/2018</span>
            </section>

            {/* <section>
              <label>Seats Available</label> <span>15</span>
            </section> */}

            {/* <section>
              <label>Class Cost/SH</label> <span>$185.00</span>
            </section>

            <section>
              <label>Total Class Cost/SH</label> <span>$555.00</span>
            </section> */}

            {/* <section>
              <label>Last Day to Drop for Full Refund</label> <span>08/26/2018</span>
            </section> */}
            <article id="cost">
              <section>
                <label>Cost per Semester Hour</label><span>$250.00</span>
              </section>

              <section>
                <label>TA Eligible Fees</label><span>$0.00</span>
              </section>

              <section>
                <label>Soldier Funded Fees</label><span>$0.00</span>
              </section>

              <section>
                <label><strong>Total</strong></label><span>$250.00</span>
              </section>
            </article>

            <section>
              <label><strong>You Pay</strong></label><span><strong>$50.00</strong></span>
            </section>

            <section>
              <label>Army Pays</label><span>$200.00</span>
            </section>

            <NavLink to='/ta/request-ta/enroll'>Request TA</NavLink>
            <NavLink className="cancel" to='/ta/request-ta/enroll'>Cancel Request</NavLink>
          </article>
        </section>
      </article>
    </main>
  )
}

export default hot(module)(Enroll)
