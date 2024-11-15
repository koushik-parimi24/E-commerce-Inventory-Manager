import { Button } from "../ui/button";
import { Card, CardContent, CardFooter } from "../ui/card";
import { SquareX } from 'lucide-react';
import { Pen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
function AdminProductTile({
    product,
    setFormData,
    setOpenCreateProductsDialog,
    setCurrentEditedId,
    handleDelete,
}) {
    const navigate = useNavigate();
    const editButtonStyle ="bg-black text-white hover:-translate-y-0.5 hover:bg-slate-600 transition duration-500";
    const deleteButtonStyle ="bg-red-500 text-white hover:-translate-y-0.5 hover:bg-red-400 transition duration-500";
    const handleCardClick = () => {
        navigate(`/admin/products/${product?._id}`); // Navigate to product details page
    };

    return (    
        <Card className="w-full max-w-sm mx-auto" onClick={handleCardClick}>
            <div>
                <div className="relative">
                <img
    src={product?.image}
    alt={product?.title}
    className="w-full h-[330px] object-contain rounded-t-lg"
/>
                </div>
                <CardContent>
                    <h2 className="text-sm font-bold mb-2 mt-2">{product?.title}</h2>
                    <div className="flex justify-between items-center mb-2">
                        <span
                            className={`${product?.salePrice > 0 ? "line-through" : ""
                                } text-lg font-semibold text-primary`}
                        >
                            ${product?.price}
                        </span>
                        {product?.salePrice > 0 ? (
                            <span className="text-lg font-bold">${product?.salePrice}</span>
                        ) : null}
                    </div>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                <Button className={editButtonStyle}
                        onClick={(e) => {
                            e.stopPropagation(); 
                            setOpenCreateProductsDialog(true);
                            setCurrentEditedId(product?._id);
                            setFormData({
                                ...product,
                                image: product?.image 
                            });
                            setImageFile(null);
                        }}
                    >
                        <Pen />
                        Edit
                    </Button>
                    <Button className={deleteButtonStyle}
                        onClick={(e) => {
                            e.stopPropagation(); // Prevent card click event
                            handleDelete(product?._id);
                        }}
                    >
                        <SquareX className="mt-1" />
                        Delete
                    </Button>
                </CardFooter>
            </div>
        </Card>
    );
}

export default AdminProductTile;