function createUserAddress() 
{
     /**
     * @openapi
     * /user-addresses:
     *   post:
     *     summary: Create User Address
     *     requestBody:
     *       description: Default  
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object 
     *             required:
     *               - user_id 
     *               - name
     *               - country 
     *               - city 
     *               - address 
     *             properties:
     *               user_id:
     *                 type: string
     *                 default: RT854D5G2255F5G4
     *               name:
     *                 type: string
     *                 default: John
     *               country:
     *                 type: string
     *                 default: Turkey
     *               city:
     *                 type: string
     *                 default: Kayseri
     *               address:
     *                 type: string
     *                 default: Orta Mah.
     *     tags:
     *       - User Addresses 
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
     *                     name:
     *                       type: string
     *                       default: John
     *                     country:
     *                       type: string
     *                       default: Turkey
     *                     city:
     *                       type: string
     *                       default: Kayseri
     *                     address:
     *                       type: string
     *                       default: Orta Mah.
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


function getUserAddresses() 
{
     /**
     * @openapi
     * /user-addresses:
     *   get:
     *     summary: Show All User Addresses
     *     tags:
     *       - User Addresses
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
     *                       name:
     *                         type: string
     *                         default: John
     *                       country:
     *                         type: string
     *                         default: Turkey
     *                       city:
     *                         type: string
     *                         default: Kayseri
     *                       address:
     *                         type: string
     *                         default: Orta Mah.
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


function getUserAddress() 
{
     /**
     * @openapi
     * /user-addresses/{id}:
     *   get:
     *     summary: Show a User Address
     *     tags:
     *       - User Addresses
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
     *                     name:
     *                       type: string
     *                       default: John
     *                     country:
     *                       type: string
     *                       default: Turkey
     *                     city:
     *                       type: string
     *                       default: Kayseri
     *                     address:
     *                       type: string
     *                       default: Orta Mah.
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


function updateUserAddress() 
{
     /**
     * @openapi
     * /user-addresses/{id}:
     *   put:
     *     summary: Update a User Address
     *     tags:
     *       - User Addresses
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
     *               - country 
     *               - city 
     *               - address 
     *             properties:
     *               name:
     *                 type: string
     *                 default: John
     *               country:
     *                 type: string
     *                 default: Turkey
     *               city:
     *                 type: string
     *                 default: Kayseri
     *               address:
     *                 type: string
     *                 default: Orta Mah.
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
     *                     name:
     *                       type: string
     *                       default: John
     *                     country:
     *                       type: string
     *                       default: Turkey
     *                     city:
     *                       type: string
     *                       default: Kayseri
     *                     address:
     *                       type: string
     *                       default: Orta Mah.
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


function deleteUserAddress() 
{
     /**
     * @openapi
     * /user-addresses/{id}:
     *   delete:
     *     summary: Delete a User Address
     *     tags:
     *       - User Addresses
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