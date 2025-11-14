import React from 'react'

const EditProfile = () => {
    return (
        <div className='w-50 mx-auto'>
            <h1 className='my-4'>Edit Profile</h1>
            <form class="row g-3">
                <div class="col form-floating mb-3">
                    <input type="text" class="form-control" id='floatingInput' placeholder="First name" aria-label="First name" />
                    <label for="floatingInput">First Name</label>
                </div>
                <div class="col form-floating mb-3">
                    <input type="text" class="form-control" id='floatingInput' placeholder="Last name" aria-label="Last name" />
                    <label for="floatingInput">Last Name</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="tel" minLength={10} maxLength={10} class="form-control" id="floatingInput" placeholder=""  />
                    <label for="floatingInput">Mobile</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="date" class="form-control" id="floatingInput" placeholder="" />
                    <label for="floatingInput">Date of birth</label>
                </div>


                    <button type="button" class="btn btn-success w-25">Save</button>

            </form>
        </div>
    )
}

export default EditProfile
