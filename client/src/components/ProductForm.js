import React, { useState } from 'react';
import './ProductForm.css';

const ProductForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        productName: '',
        productID: '',
        manufacturer: '',
        origin: '',
        description: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.productName) newErrors.productName = "Product name is required.";
        if (!formData.productID) newErrors.productID = "Product ID is required.";
        if (!formData.manufacturer) newErrors.manufacturer = "Manufacturer is required.";
        if (!formData.origin) newErrors.origin = "Country of origin is required.";
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setErrors({});
            onSubmit(formData);
        }
    };

    return (
        <form className="product-form" onSubmit={handleSubmit}>
            <h2>Add New Product</h2>
            <div className="form-group">
                <label htmlFor="productName">Product Name</label>
                <input
                    type="text"
                    id="productName"
                    name="productName"
                    value={formData.productName}
                    onChange={handleChange}
                    placeholder="Enter product name"
                />
                {errors.productName && <p className="error">{errors.productName}</p>}
            </div>

            <div className="form-group">
                <label htmlFor="productID">Product ID</label>
                <input
                    type="text"
                    id="productID"
                    name="productID"
                    value={formData.productID}
                    onChange={handleChange}
                    placeholder="Enter product ID"
                />
                {errors.productID && <p className="error">{errors.productID}</p>}
            </div>

            <div className="form-group">
                <label htmlFor="manufacturer">Manufacturer</label>
                <input
                    type="text"
                    id="manufacturer"
                    name="manufacturer"
                    value={formData.manufacturer}
                    onChange={handleChange}
                    placeholder="Enter manufacturer"
                />
                {errors.manufacturer && <p className="error">{errors.manufacturer}</p>}
            </div>

            <div className="form-group">
                <label htmlFor="origin">Country of Origin</label>
                <input
                    type="text"
                    id="origin"
                    name="origin"
                    value={formData.origin}
                    onChange={handleChange}
                    placeholder="Enter country of origin"
                />
                {errors.origin && <p className="error">{errors.origin}</p>}
            </div>

            <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Enter product description"
                />
            </div>

            <button type="submit" className="submit-button">Submit</button>
        </form>
    );
};

export default ProductForm;
