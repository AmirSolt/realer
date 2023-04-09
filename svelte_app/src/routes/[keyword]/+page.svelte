<script>
    export let data;
</script>

<div>
    <div class="grid-container">
        {#each data.products as product}
            <div class="grid-item">
                <a href={product.url} target="_blank">
                    <img
                        src={product.thumbnail}
                        alt="Image for {product.title}"
                    />
                    <p>{product.title}</p>
                    {#if product.price.before_price}
                        <p>
                            <s
                                >{product.price.currency}{product.price
                                    .before_price}</s
                            >
                        </p>
                    {/if}
                    <p>{product.price.currency}{product.price.current_price}</p>
                    <h2>
                        Saved {product.price.currency}{product.price
                            .savings_amount}
                    </h2>
                    <p>{product.asin}</p>

                    <!-- render ratings -->
                    {#if product.ratings}
                        <p>{product.reviews.rating}</p>
                        <p>({product.reviews.total_reviews})</p>
                    {/if}

                    <p>prime:{product.amazonPrime}</p>
                </a>
            </div>
        {/each}
    </div>
</div>




<style>
    .grid-container {
      display: grid;
      grid-template-columns: auto auto auto;
      background-color: #2196F3;
      padding: 10px;
    }
    .grid-item {
      background-color: rgba(255, 255, 255, 0.8);
      border: 1px solid rgba(0, 0, 0, 0.8);
      padding: 20px;
      font-size: 30px;
      text-align: center;
    }
    </style>