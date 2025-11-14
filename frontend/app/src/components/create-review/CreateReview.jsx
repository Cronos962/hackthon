import React from 'react'

const CreateReview = () => {
    return (
        <div className='w-50 mx-auto mt-5'>
            <h1 className='my-4'>Create Review for "Titanic"</h1>
            <form>
                <div className="mb-3">
                    <label htmlFor="ratingInput" className="form-label">Rating (1-10)</label>
                    <input
                        type="number"
                        className="form-control"
                        id="ratingInput"
                        placeholder="Rating (1-10)"
                        defaultValue={8}
                        min={1}
                        max={10}
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="reviewTextarea" className="form-label">Your Review</label>
                    <textarea
                        className="form-control"
                        id="reviewTextarea"
                        rows={4}
                        defaultValue="A timeless classic with powerful emotions and storytelling."
                        required
                    ></textarea>
                </div>

                <button type="submit" className="btn btn-success me-2">Submit Review</button>
                <button type="button" className="btn btn-secondary">Cancel</button>

            </form>
        </div>
    )
}

export default CreateReview;
