import {useState,useEffect} from "react";
import {topProductsData} from '../Top Products/products data';
import Products from '../ALL-PRODUCTS/Products';


const SortProducts=({sortMethod,selectedBrands,selectedCategory})=>{
    const [productCards,setProductCards]=useState(topProductsData);
    
    useEffect(()=>{
        
        let filteredProducts=[...topProductsData];

        if (selectedBrands.length>0){
            filteredProducts=filteredProducts.filter((product)=>
                selectedBrands.some((brand)=>brand.toLowerCase()===product.brand.toLowerCase())
        );
               
        };
        if (selectedCategory.length>0) {
            filteredProducts=filteredProducts.filter((product)=>
                selectedCategory.some((cate)=>cate.toLowerCase()===product.category.toLowerCase())
            );
        };
        switch(sortMethod){
            case "Latest":
                filteredProducts.sort((a,b)=>new Date(b.date)-new Date(a.date));
                break;
            case "Featured":
                filteredProducts=filteredProducts.filter((product)=>product.tag==='featured-product');
                break;
            case "Top Rated":
                filteredProducts.sort((a,b) =>b.rateCount-a.rateCount);
                break;
            case "Price(Lowest First)":
                filteredProducts.sort((a,b)=>a.finalPrice-b.finalPrice);
                break;
            case "Price(Highest First)":    
            filteredProducts.sort((a,b)=>b.finalPrice-a.finalPrice);
                break;
            default:
                
                break;
        }
        setProductCards(filteredProducts);

    },[sortMethod,selectedBrands,selectedCategory])
    return(
        <Products productCards={productCards} />
    )  ;
                
};
export default SortProducts;