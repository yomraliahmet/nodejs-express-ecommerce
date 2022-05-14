function createUserBillingInformation() 
{
     /**
     * @openapi
     * /user-billing-informations:
     *   post:
     *     summary: Create User Billing Information
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
     *               - surname 
     *               - phone 
     *               - city 
     *               - address 
     *               - bill_type 
     *             properties:
     *               user_id:
     *                 type: string
     *                 default: RT854D5G2255F5G4
     *               name:
     *                 type: string
     *                 default: John
     *               surname:
     *                 type: string
     *                 default: Doe
     *               phone:
     *                 type: string
     *                 default: 05379865898
     *               city:
     *                 type: string
     *                 default: Kayseri
     *               address:
     *                 type: string
     *                 default: Orta Mah.
     *               bill_type:
     *                 type: string
     *                 default: Bireysel
     *               company_name:
     *                 type: string
     *                 default: ABC Company
     *               tax_administration:
     *                 type: string
     *                 default: Hızırbey
     *               tax_number:
     *                 type: string
     *                 default: 89751465
     *               efatura:
     *                 type: boolean
     *                 default: false
     *     tags:
     *       - User Billing Informations 
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
     *                     name:
     *                       type: string
     *                       default: John
     *                     surname:
     *                       type: string
     *                       default: Doe
     *                     phone:
     *                       type: string
     *                       default: 05379865898
     *                     city:
     *                       type: string
     *                       default: Kayseri
     *                     address:
     *                       type: string
     *                       default: Orta Mah.
     *                     bill_type:
     *                       type: string
     *                       default: Bireysel
     *                     company_name:
     *                       type: string
     *                       default: ABC Company
     *                     tax_administration:
     *                       type: string
     *                       default: Hızırbey
     *                     tax_number:
     *                       type: string
     *                       default: 89751465
     *                     efatura:
     *                       type: boolean
     *                       default: false
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


function getUserBillingInformations() 
{
     /**
     * @openapi
     * /user-billing-informations:
     *   get:
     *     summary: Show All User Billing Informations
     *     tags:
     *       - User Billing Informations
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
     *                       surname:
     *                         type: string
     *                         default: Doe
     *                       phone:
     *                         type: string
     *                         default: 05379865898
     *                       city:
     *                         type: string
     *                         default: Kayseri
     *                       address:
     *                         type: string
     *                         default: Orta Mah.
     *                       bill_type:
     *                         type: string
     *                         default: Bireysel
     *                       company_name:
     *                         type: string
     *                         default: ABC Company
     *                       tax_administration:
     *                         type: string
     *                         default: Hızırbey
     *                       tax_number:
     *                         type: string
     *                         default: 89751465
     *                       efatura:
     *                         type: boolean
     *                         default: false
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


function getUserBillingInformation() 
{
     /**
     * @openapi
     * /user-billing-informations/{id}:
     *   get:
     *     summary: Show a User Billing Information
     *     tags:
     *       - User Billing Informations
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
     *                     surname:
     *                       type: string
     *                       default: Doe
     *                     phone:
     *                       type: string
     *                       default: 05379865898
     *                     city:
     *                       type: string
     *                       default: Kayseri
     *                     address:
     *                       type: string
     *                       default: Orta Mah.
     *                     bill_type:
     *                       type: string
     *                       default: Bireysel
     *                     company_name:
     *                       type: string
     *                       default: ABC Company
     *                     tax_administration:
     *                       type: string
     *                       default: Hızırbey
     *                     tax_number:
     *                       type: string
     *                       default: 89751465
     *                     efatura:
     *                       type: boolean
     *                       default: false
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


function updateUserBillingInformation() 
{
     /**
     * @openapi
     * /user-billing-informations/{id}:
     *   put:
     *     summary: Update a User Billing Information
     *     tags:
     *       - User Billing Informations
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
     *               - surname 
     *               - phone 
     *               - city 
     *               - address 
     *               - bill_type 
     *             properties:
     *               name:
     *                 type: string
     *                 default: John
     *               surname:
     *                 type: string
     *                 default: Doe
     *               phone:
     *                 type: string
     *                 default: 05379865898
     *               city:
     *                 type: string
     *                 default: Kayseri
     *               address:
     *                 type: string
     *                 default: Orta Mah.
     *               bill_type:
     *                 type: string
     *                 default: Bireysel
     *               company_name:
     *                 type: string
     *                 default: ABC Company
     *               tax_administration:
     *                 type: string
     *                 default: Hızırbey
     *               tax_number:
     *                 type: string
     *                 default: 89751465
     *               efatura:
     *                 type: boolean
     *                 default: false
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
     *                     surname:
     *                       type: string
     *                       default: Doe
     *                     phone:
     *                       type: string
     *                       default: 05379865898
     *                     city:
     *                       type: string
     *                       default: Kayseri
     *                     address:
     *                       type: string
     *                       default: Orta Mah.
     *                     bill_type:
     *                       type: string
     *                       default: Bireysel
     *                     company_name:
     *                       type: string
     *                       default: ABC Company
     *                     tax_administration:
     *                       type: string
     *                       default: Hızırbey
     *                     tax_number:
     *                       type: string
     *                       default: 89751465
     *                     efatura:
     *                       type: boolean
     *                       default: false
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


function deleteUserBillingInformation() 
{
     /**
     * @openapi
     * /user-billing-informations/{id}:
     *   delete:
     *     summary: Delete a User Billing Information
     *     tags:
     *       - User Billing Informations
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