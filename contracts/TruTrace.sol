// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TruTrace {
    struct Product {
        string name;
        string manufacturer;
        uint256 timestamp;
        bool verified;
    }

    mapping(uint256 => Product) public products;
    
    event ProductRegistered(uint256 indexed productId, string name, string manufacturer, uint256 timestamp);

    function registerProduct(uint256 productId, string memory name, string memory manufacturer) public {
        require(bytes(name).length > 0, "Product name is required");
        require(bytes(manufacturer).length > 0, "Manufacturer is required");
        require(products[productId].timestamp == 0, "Product already registered");

        products[productId] = Product(name, manufacturer, block.timestamp, true);
        emit ProductRegistered(productId, name, manufacturer, block.timestamp);
    }

    function verifyProduct(uint256 productId) public view returns (bool) {
        return products[productId].verified;
    }
}
