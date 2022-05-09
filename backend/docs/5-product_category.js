function createProductCategory() 
{
     /**
     * @openapi
     * /product-categories:
     *   post:
     *     summary: Create Product Category
     *     requestBody:
     *       description: Default  
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object 
     *             required:
     *               - name 
     *               - slug 
     *             properties:
     *               parent_id:
     *                 type: string
     *                 default: null
     *               name:
     *                 type: string
     *                 default: Product Category 1
     *               slug:
     *                 type: string
     *                 default: product-category-1
     *               order:
     *                 type: integer
     *                 default: 0
     *               is_active:
     *                 type: boolean
     *                 default: true
     *     tags:
     *       - Product Categories 
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
     *                     parent_id:
     *                       type: string
     *                       default: null
     *                     name:
     *                       type: string
     *                       default: Product Category 1
     *                     slug:
     *                       type: string
     *                       default: product-category-1
     *                     order:
     *                       type: integer
     *                       default: 0
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


function getProductCategories() 
{
     /**
     * @openapi
     * /product-categories:
     *   get:
     *     summary: Show All Product Categories
     *     tags:
     *       - Product Categories
     *     security:
     *       - bearerAuth: []
     *     parameters:
     *       - name: list_type
     *         in: query
     *         description: tree or list
     *         required: false
     *         schema:
     *           type: string
     *           default: tree        
     *     responses:
     *       200 - tree:
     *         description: list_type tree
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
     *                         type: integer
     *                         default: 1
     *                       parent_id:
     *                         type: string
     *                         default: null
     *                       name:
     *                         type: string
     *                         default: Product Category 1
     *                       slug:
     *                         type: string
     *                         default: product-category-1
     *                       order:
     *                         type: integer
     *                         default: 0
     *                       is_active:
     *                         type: boolean
     *                         default: true
     *                       subcategory:
     *                         type: array
     *                         items:
     *                           properties:  
     *                             id:  
     *                               type: string  
     *                               default: 62767c1389518940554337c1  
     *                             parent_id:  
     *                               type: string  
     *                               default: 62767c1389518940554337c1  
     *                             name:  
     *                               type: string  
     *                               default: Product Sub Category 1  
     *                             slug:  
     *                               type: string  
     *                               default: product-sub-category-1  
     *                             order:  
     *                               type: integer  
     *                               default: 0 
     *                             is_active:  
     *                               type: boolean  
     *                               default: true 
     *       200 - list:
     *         description: list_type list
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
     *                         type: integer
     *                         default: 1
     *                       parent_id:
     *                         type: string
     *                         default: null
     *                       name:
     *                         type: string
     *                         default: Product Category 1
     *                       slug:
     *                         type: string
     *                         default: product-category-1
     *                       order:
     *                         type: integer
     *                         default: 0
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


function getProductCategory() 
{
     /**
     * @openapi
     * /product-categories/{id}:
     *   get:
     *     summary: Show a Product Category
     *     tags:
     *       - Product Categories
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
     *                       type: integer
     *                       default: 1
     *                     parent_id:
     *                       type: string
     *                       default: null
     *                     name:
     *                       type: string
     *                       default: Product Category 1
     *                     slug:
     *                       type: string
     *                       default: product-category-1
     *                     order:
     *                       type: integer
     *                       default: 0
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


function getProductCategoryWithSlug() 
{
     /**
     * @openapi
     * /product-categories/{slug}:
     *   get:
     *     summary: Show a Product Category
     *     tags:
     *       - Product Categories
     *     security:
     *       - bearerAuth: []
     *     parameters:
     *       - name: slug
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
     *                       type: integer
     *                       default: 1
     *                     parent_id:
     *                       type: string
     *                       default: null
     *                     name:
     *                       type: string
     *                       default: Product Category 1
     *                     slug:
     *                       type: string
     *                       default: product-category-1
     *                     order:
     *                       type: integer
     *                       default: 0
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


function updateProductCategory() 
{
     /**
     * @openapi
     * /product-categories/{id}:
     *   put:
     *     summary: Update a Product Category
     *     tags:
     *       - Product Categories
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
     *               - name 
     *               - slug 
     *             properties:
     *               parent_id:
     *                 type: string
     *                 default: null
     *               name:
     *                 type: string
     *                 default: Product Category 1
     *               slug:
     *                 type: string
     *                 default: product-category-1
     *               order:
     *                 type: integer
     *                 default: 0
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
     *                       type: integer
     *                       default: 1
     *                     parent_id:
     *                       type: string
     *                       default: null
     *                     name:
     *                       type: string
     *                       default: Product Category 1
     *                     slug:
     *                       type: string
     *                       default: product-category-1
     *                     order:
     *                       type: integer
     *                       default: 0
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


function deleteProductCategory() 
{
     /**
     * @openapi
     * /product-categories/{id}:
     *   delete:
     *     summary: Delete a Product Category
     *     tags:
     *       - Product Categories
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