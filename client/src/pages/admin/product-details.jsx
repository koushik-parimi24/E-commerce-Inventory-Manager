import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findProductById } from "../../store/admin/products-slice/index";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel";
import { Star } from "lucide-react";

function AdminProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate(); // Initialize useNavigate
  const dispatch = useDispatch();
  const { productDetail, isLoading } = useSelector(
    (state) => state.adminProducts
  );

  useEffect(() => {
    dispatch(findProductById(id));
  }, [id, dispatch]);

  if (!productDetail) {
    return <div>Product not found</div>;
  }

  const repeatedImages = Array(10).fill(productDetail.image);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-4">
      {/* Carousel Section */}
      <div className="w-full md:w-1/2 lg:w-2/3 xl:w-3/4 p-4 mb-4 md:mb-0">
        <Carousel
          className="w-full max-w-lg"
          swipeable={true}
          draggable={true}
          showDots={true}
          responsive={{
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 1,
              slidesToSlide: 1,
            },
            tablet: {
              breakpoint: { max: 1024, min: 464 },
              items: 1,
              slidesToSlide: 1,
            },
            mobile: {
              breakpoint: { max: 464, min: 0 },
              items: 1,
              slidesToSlide: 1,
            },
          }}
        >
          <CarouselContent>
            {repeatedImages.map((image, index) => (
              <CarouselItem key={index} className="h-full">
                <div className="p-1">
                  <img
                    src={image}
                    alt={productDetail.title}
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div className="md:w-1/2 lg:w-2/3 xl:w-3/4 p-4 rounded-lg shadow-sm">
        <h1 className="font-semibold text-center text-4xl md:text-3xl py-3 text-gray-800">
          {productDetail.title}
        </h1>
        <p className="text-lg mb-2 py-0.5 font-bold text-gray-600">
          Description:
        </p>
        <span className="mb-2">{productDetail.description}</span>
        <div className="flex items-center mb-2">
          <p className="text-lg font-bold text-gray-800">Price:</p>
          <span className="line-through text-red-500 ml-2">
            ${productDetail.price}
          </span>
        </div>
        {productDetail.salePrice > 0 && (
          <div className="flex items-center mb-2">
            <p className="text-lg font-bold text-gray-800">Sale Price:</p>
            <span className="text-green-600 ml-2">
              ${productDetail.salePrice}
            </span>
          </div>
        )}
        <div className="mb-2">
          <p className="text-lg font-bold text-gray-800">Tags:</p>
          <div className="flex flex-col mt-2">
            <p className="text-md">
              Category:{" "}
              <span className="font-medium">{productDetail.category}</span>
            </p>
            <p className="text-md">
              Brand: <span className="font-medium">{productDetail.brand}</span>
            </p>
          </div>
        </div>
        <div className="flex items-center mb-2">
          <p className="text-lg font-bold text-gray-800">Total Stock:</p>
          <span className="ml-2">
            {productDetail.totalStock} in the inventory
 </span>
        </div>
        <div className="flex items-center mb-2">
          <p className="text-lg font-bold text-gray-800">Rating:</p>
          <p className="ml-2 text-yellow-500">4.5 </p>
          <div className="ml-2">
            <Star />
          </div>
        </div>
        <div className="flex items-center mt-6">
          <button 
            onClick={() => navigate('/admin/products')} 
            className="mb-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Back to Products
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdminProductDetails;