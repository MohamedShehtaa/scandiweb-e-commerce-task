export const dataQuery = `{
  currencies{
    label
    symbol
  }
  categories {
    name
    products{
      name
      id
      category
      inStock
      description
      brand
      gallery
      attributes{
       name
        id
        type
        items{
          id
          value
          displayValue
        }
      }
      prices{
        currency{
          label
          symbol
      }
        amount
        
      } 
    }
  }
}
    `;

export const productByIdQuery = (id) => {
    return `{
    product (id :"${id}"){
      name
      id
      category
      inStock
      description
      brand
      gallery
      attributes{
       name
        id
        type
        items{
          id
          value
          displayValue
        }
      }
      prices{
        currency
        amount
        
      }  
    }
  }`;
};
