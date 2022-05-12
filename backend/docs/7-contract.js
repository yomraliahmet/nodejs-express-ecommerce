function createContract() 
{
     /**
     * @openapi
     * /contracts:
     *   post:
     *     summary: Create Contract
     *     requestBody:
     *       description: Default  
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object 
     *             required:
     *               - name 
     *               - key 
     *               - content 
     *             properties:
     *               name:
     *                 type: string
     *                 default: User Contract 1
     *               key:
     *                 type: string
     *                 default: user_contract_1
     *               content:
     *                 type: string
     *                 default: User Contract 1 Content
     *               is_active:
     *                 type: boolean
     *                 default: true
     *     tags:
     *       - Contracts 
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
     *                       default:
     *                     name:
     *                       type: string
     *                       default: User Contract 1
     *                     key:
     *                       type: string
     *                       default: user_contract_1
     *                     content:
     *                       type: string
     *                       default: User Contract 1 Content
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


function getContracts() 
{
     /**
     * @openapi
     * /contracts:
     *   get:
     *     summary: Show All Contracts
     *     tags:
     *       - Contracts
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
     *                         type: integer
     *                         default: 1
     *                       name:
     *                         type: string
     *                         default: User Contract 1
     *                       key:
     *                         type: string
     *                         default: user_contract_1
     *                       content:
     *                         type: string
     *                         default: User Contract 1 Content
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


function getContract() 
{
     /**
     * @openapi
     * /contracts/{id}:
     *   get:
     *     summary: Show a Contract
     *     tags:
     *       - Contracts
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
     *                     name:
     *                       type: string
     *                       default: User Contract 1
     *                     key:
     *                       type: string
     *                       default: user_contract_1
     *                     content:
     *                       type: string
     *                       default: User Contract 1 Content
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

function updateContract() 
{
     /**
     * @openapi
     * /contracts/{id}:
     *   put:
     *     summary: Update a Contract
     *     tags:
     *       - Contracts
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
     *               - key 
     *               - content 
     *             properties:
     *               name:
     *                 type: string
     *                 default: User Contract 1
     *               key:
     *                 type: string
     *                 default: user_contract_1
     *               content:
     *                 type: string
     *                 default: User Contract 1 Content
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
     *                     name:
     *                       type: string
     *                       default: User Contract 1
     *                     key:
     *                       type: string
     *                       default: user_contract_1
     *                     content:
     *                       type: string
     *                       default: User Contract 1 Content
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


function deleteContract() 
{
     /**
     * @openapi
     * /contracts/{id}:
     *   delete:
     *     summary: Delete a Contract
     *     tags:
     *       - Contracts
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