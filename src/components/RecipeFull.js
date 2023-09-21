import React, { useState } from "react";
import EditRecipeForm from "./EditRecipeForm";
import ConfirmationModal from "./ConfirmationModal";

const RecipeFull = ({ selectedRecipe, handleUnselectRecipe, handleDeleteRecipe, onUpdateForm, handleUpdateRecipe }) => {
  const [editing, setEditing] = useState(false);
  const [showConfirmationModal, setShowConfirmationModel] = useState(false);

  const handleCancel = () => {
    setEditing(false);
  };

  if (showConfirmationModal) {
    return (
      <div className='recipe-details'>
        {showConfirmationModal && (
          <ConfirmationModal
            message='Are you sure?'
            onCancel={() => setShowConfirmationModel(false)}
            onConfirm={() => handleDeleteRecipe(selectedRecipe.id)}
          />
        )}
      </div>
    );
  }
  return (
    <div className='recipe-details'>
      {editing ? (
        <EditRecipeForm
          selectedRecipe={selectedRecipe}
          onUpdateForm={onUpdateForm}
          handleDeleteRecipe={handleDeleteRecipe}
          handleCancel={handleCancel}
          handleUpdateRecipe={handleUpdateRecipe}
          showConfirmationModal={showConfirmationModal}
        />
      ) : (
        <article>
          <header>
            <figure>
              <img alt={selectedRecipe.title} src={selectedRecipe.image_url} />
            </figure>
            <h2>{selectedRecipe.title}</h2>

            <button onClick={() => setEditing(true)}>Edit</button>
            <button className='close-button' onClick={() => handleUnselectRecipe(selectedRecipe)}>
              Close
            </button>
            <button className='delete-button' onClick={() => setShowConfirmationModel(true)}>
              Delete
            </button>
          </header>

          <p className='bold'>Description:</p>
          <p>{selectedRecipe.description}</p>

          <p className='bold'>Ingredients:</p>

          <ul>
            {selectedRecipe.ingredients.split(",").map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <p className='bold'>Instructions:</p>

          <pre className='formatted-text'>{selectedRecipe.instructions}</pre>

          <p className='bold'>Servings: {selectedRecipe.servings}</p>
        </article>
      )}
    </div>
  );
};

export default RecipeFull;
