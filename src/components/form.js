import React from "react";
import {connect} from "react-redux";
import {addArticle} from "../js/actions";


const mapDispatchToProps = dispatch => {
    return {
        addArticle: article => dispatch(addArticle(article))
    };
};

const ConnectedForm = ({addArticle}) => (
    <div>
        <div className="form-group">
            <label htmlFor="title">Title</label>
            <input type="text" className="form-control" id="title"/>
        </div>
        <button
            className="btn btn-success btn-lg"
            onClick={() => {
                addArticle({title: document.getElementById("title").value})
            }}>
            Save
        </button>
    </div>
);

const Form = connect(null, mapDispatchToProps)(ConnectedForm);

export default Form;
