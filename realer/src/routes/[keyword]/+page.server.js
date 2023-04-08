

import amazonScraper from 'amazon-buddy';




async function scrape_amazon(keyword, country_code, cookie, page_num) {
    try {

        const response = await amazonScraper.products({
            keyword: keyword,
            country: country_code,
            randomUa: true,
            //   cookie: '',
            bulk: false,
            page: 1,
            // number: 60,
            //  discount: true,
        });

        return response['result'];


    } catch (error) {
        console.log(error);
    }
}



function clean_products(results){
    const products = results.filter((item) => {
        const dis = item['price']['discounted'];
        const sponsered = item['title'].includes('Sponsored');
        if(dis && !sponsered){
            return product;
        }
    })
}



 
export async function load({ params }) {


    const results = await scrape_amazon(params.keyword, "CA", "", 1);
    // const products = clean_products(results);

  return {
    products: results

  };
}