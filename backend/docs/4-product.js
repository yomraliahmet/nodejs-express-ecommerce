function createProduct() 
{
     /**
     * @openapi
     * /products:
     *   post:
     *     summary: Create Product
     *     requestBody:
     *       description: Default  
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object 
     *             required:
     *               - category_id
     *               - name 
     *               - slug 
     *             properties:
     *               category_id:
     *                 type: string
     *                 default: 8UF2DS45F1G4D2D4F
     *               name:
     *                 type: string
     *                 default: Product 1
     *               slug:
     *                 type: string
     *                 default: product-1
     *               description:
     *                 type: string
     *                 default: Product 1 Description
     *               image_url:
     *                 type: string
     *                 default: null
     *               video_url:
     *                 type: string
     *                 default: null
     *               price:
     *                 type: decimal
     *                 default: 20.50
     *               discount:
     *                 type: decimal
     *                 default: 0.50
     *               tax:
     *                 type: decimal
     *                 default: 0.18
     *               currency:
     *                 type: string
     *                 default: TL
     *               is_active:
     *                 type: boolean
     *                 default: true
     *     tags:
     *       - Products 
     *     security:
     *       - bearerAuth: []
     *     responses:
     *       200:
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 code:
     *                   type: integer
     *                   default: 200             
     *                 message:
     *                   type: string
     *                   default: Success             
     *                 data:
     *                   type: object
     *                   properties:
     *                     id:
     *                       type: string
     *                       default: 1
     *                     category_id:
     *                       type: string
     *                       default: 1
     *                     name:
     *                       type: string
     *                       default: Product 1
     *                     slug:
     *                       type: string
     *                       default: product-1
     *                     description:
     *                       type: string
     *                       default: Product 1 Description
     *                     image_url:
     *                       type: string
     *                       default: null
     *                     video_url:
     *                       type: string
     *                       default: null
     *                     price:
     *                       type: decimal
     *                       default: 20.50
     *                     discount:
     *                       type: decimal
     *                       default: 0.50
     *                     tax:
     *                       type: decimal
     *                       default: 0.18
     *                     is_active:
     *                       type: boolean
     *                       default: true
     *       default:
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 code:
     *                   type: integer
     *                   default: 400             
     *                 message:
     *                   type: string
     *                   default: Bad Request                            
     *                 data:
     *                   type: null
     *                   default: null                            
     */
}


function getProducts() 
{
     /**
     * @openapi
     * /products:
     *   get:
     *     summary: Show All Products
     *     tags:
     *       - Products
     *     security:
     *       - bearerAuth: []
     *     responses:
     *       200:
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 code:
     *                   type: integer
     *                   default: 200             
     *                 message:
     *                   type: string
     *                   default: Success             
     *                 data:
     *                   type: array
     *                   items:
     *                     properties:
     *                       id:
     *                         type: string
     *                         default: 1
     *                       category_id:
     *                         type: string
     *                         default: 1
     *                       name:
     *                         type: string
     *                         default: Product 1
     *                       slug:
     *                         type: string
     *                         default: product-1
     *                       description:
     *                         type: string
     *                         default: Product 1 Description
     *                       image_url:
     *                         type: string
     *                         default: null
     *                       video_url:
     *                         type: string
     *                         default: null
     *                       price:
     *                         type: decimal
     *                         default: 20.50
     *                       discount:
     *                         type: decimal
     *                         default: 0.50
     *                       tax:
     *                         type: decimal
     *                         default: 0.18
     *                       is_active:
     *                         type: boolean
     *                         default: true
     *       default:
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 code:
     *                   type: integer
     *                   default: 404             
     *                 message:
     *                   type: string
     *                   default: Not Found                           
     *                 data:
     *                   type: null
     *                   default: null                            
     */
}


function getProduct() 
{
     /**
     * @openapi
     * /products/{id}:
     *   get:
     *     summary: Show a Product
     *     tags:
     *       - Products
     *     security:
     *       - bearerAuth: []
     *     parameters:
     *       - name: id
     *         in: path
     *         required: true
     *         schema:
     *           type: string
     *     responses:
     *       200:
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 code:
     *                   type: integer
     *                   default: 200             
     *                 message:
     *                   type: string
     *                   default: Success             
     *                 data:
     *                   type: object
     *                   properties:
     *                     id:
     *                       type: string
     *                       default: 1
     *                     category_id:
     *                       type: string
     *                       default: 1
     *                     name:
     *                       type: string
     *                       default: Product 1
     *                     slug:
     *                       type: string
     *                       default: product-1
     *                     description:
     *                       type: string
     *                       default: Product 1 Description
     *                     image_url:
     *                       type: string
     *                       default: null
     *                     video_url:
     *                       type: string
     *                       default: null
     *                     price:
     *                       type: decimal
     *                       default: 20.50
     *                     discount:
     *                       type: decimal
     *                       default: 0.50
     *                     tax:
     *                       type: decimal
     *                       default: 0.18
     *                     is_active:
     *                       type: boolean
     *                       default: true
     *       default:
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 code:
     *                   type: integer
     *                   default: 404             
     *                 message:
     *                   type: string
     *                   default: Not Found                           
     *                 data:
     *                   type: null
     *                   default: null                            
     */
}


function updateProduct() 
{
     /**
     * @openapi
     * /products/{id}:
     *   put:
     *     summary: Update a Product
     *     tags:
     *       - Products
     *     security:
     *       - bearerAuth: []
     *     parameters:
     *       - name: id
     *         in: path
     *         required: true
     *         schema:
     *           type: string
     *     requestBody:
     *       description: Default  
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object 
     *             required:
     *               - category_id
     *               - name 
     *               - slug 
     *             properties:
     *               category_id:
     *                 type: string
     *                 default: 8UF2DS45F1G4D2D4F
     *               name:
     *                 type: string
     *                 default: Product 1
     *               slug:
     *                 type: string
     *                 default: product-1
     *               description:
     *                 type: string
     *                 default: Product 1 Description
     *               image_url:
     *                 type: string
     *                 default: null
     *               video_url:
     *                 type: string
     *                 default: null
     *               price:
     *                 type: decimal
     *                 default: 20.50
     *               discount:
     *                 type: decimal
     *                 default: 0.50
     *               tax:
     *                 type: decimal
     *                 default: 0.18
     *               currency:
     *                 type: string
     *                 default: TL
     *               is_active:
     *                 type: boolean
     *                 default: true
     *     responses:
     *       200:
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 code:
     *                   type: integer
     *                   default: 200             
     *                 message:
     *                   type: string
     *                   default: Success             
     *                 data:
     *                   type: object
     *                   properties:
     *                     id:
     *                       type: string
     *                       default: 1
     *                     category_id:
     *                       type: string
     *                       default: 1
     *                     name:
     *                       type: string
     *                       default: Product 1
     *                     slug:
     *                       type: string
     *                       default: product-1
     *                     description:
     *                       type: string
     *                       default: Product 1 Description
     *                     image_url:
     *                       type: string
     *                       default: null
     *                     video_url:
     *                       type: string
     *                       default: null
     *                     price:
     *                       type: decimal
     *                       default: 20.50
     *                     discount:
     *                       type: decimal
     *                       default: 0.50
     *                     tax:
     *                       type: decimal
     *                       default: 0.18
     *                     is_active:
     *                       type: boolean
     *                       default: true
     *       default:
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 code:
     *                   type: integer
     *                   default: 404             
     *                 message:
     *                   type: string
     *                   default: Not Found                           
     *                 data:
     *                   type: null
     *                   default: null                            
     */
}


function deleteProduct() 
{
     /**
     * @openapi
     * /products/{id}:
     *   delete:
     *     summary: Delete a Product
     *     tags:
     *       - Products
     *     security:
     *       - bearerAuth: []
     *     parameters:
     *       - name: id
     *         in: path
     *         required: true
     *         schema:
     *           type: string
     *     responses:
     *       200:
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 code:
     *                   type: integer
     *                   default: 200             
     *                 message:
     *                   type: string
     *                   default: Success             
     *                 data:
     *                   type: null
     *                   default: null
     *       default:
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 code:
     *                   type: integer
     *                   default: 404             
     *                 message:
     *                   type: string
     *                   default: Not Found                           
     *                 data:
     *                   type: null
     *                   default: null                            
     */
}