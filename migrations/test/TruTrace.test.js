const TruTrace = artifacts.require("TruTrace");

contract("TruTrace", (accounts) => {
  it("should register a product successfully", async () => {
    const instance = await TruTrace.deployed();
    await instance.registerProduct(1, "Test Product", "Test Manufacturer", { from: accounts[0] });
    const product = await instance.products(1);
    assert.equal(product.name, "Test Product", "Product name should match");
  });

  it("should verify the product", async () => {
    const instance = await TruTrace.deployed();
    const verified = await instance.verifyProduct(1);
    assert.equal(verified, true, "Product should be verified");
  });
});
