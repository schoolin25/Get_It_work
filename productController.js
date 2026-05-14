export const getProducts = (req, res) => {
    const { category, page } = req.query;
    res.json({
        message: "상품 목록",
        filters: {
            category: category,
            page: page
        }
    });
};

export const createProduct = (req, res) => {
    const { name, price } = req.body;
    res.status(201).json({
        message: "상품 생성 완료",
        data: {
            name: name,
            price: price
        }
    });
};