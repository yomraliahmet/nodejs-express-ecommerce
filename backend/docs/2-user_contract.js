function createUserContract() 
{
     /**
     * @openapi
     * /user-contracts:
     *   post:
     *     summary: Create User Contract
     *     requestBody:
     *       description: Default  
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object 
     *             required:
     *               - user_id 
     *               - contract_id 
     *               - content
     *             properties:
     *               user_id:
     *                 type: string
     *                 default: RT854D5G2255F5G4
     *               contract_id:
     *                 type: string
     *                 default: RT854D5G2255F5G4
     *               content:
     *                 type: string
     *                 default: User Contract 1
     *     tags:
     *       - User Contracts 
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
     *                     user_id:
     *                       type: string
     *                       default: RT854D5G2255F5G4
     *                     contract_id:
     *                       type: string
     *                       default: RT854D5G2255F5G4
     *                     content:
     *                       type: string
     *                       default: User Contract 1
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


function getUserContracts() 
{
     /**
     * @openapi
     * /user-contracts:
     *   get:
     *     summary: Show All User Contracts
     *     tags:
     *       - User Contracts
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
     *                       user_id:
     *                         type: string
     *                         default: RT854D5G2255F5G4
     *                       contract_id:
     *                         type: string
     *                         default: RT854D5G2255F5G4
     *                       content:
     *                         type: string
     *                         default: User Contract 1
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


function getUserContract() 
{
     /**
     * @openapi
     * /user-contracts/{id}:
     *   get:
     *     summary: Show a User Contract
     *     tags:
     *       - User Contracts
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
     *                     user_id:
     *                       type: string
     *                       default: RT854D5G2255F5G4
     *                     contract_id:
     *                       type: string
     *                       default: RT854D5G2255F5G4
     *                     content:
     *                       type: string
     *                       default: User Contract 1
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


function updateUserContract() 
{
     /**
     * @openapi
     * /user-contracts/{id}:
     *   put:
     *     summary: Update a User Contract
     *     tags:
     *       - User Contracts
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
     *               - content 
     *             properties:
     *               content:
     *                 type: string
     *                 default: User Contract 1
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
     *                     user_id:
     *                       type: string
     *                       default: RT854D5G2255F5G4
     *                     contract_id:
     *                       type: string
     *                       default: RT854D5G2255F5G4
     *                     content:
     *                       type: string
     *                       default: User Contract 1
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


function deleteUserContract() 
{
     /**
     * @openapi
     * /user-contracts/{id}:
     *   delete:
     *     summary: Delete a User Contract
     *     tags:
     *       - User Contracts
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