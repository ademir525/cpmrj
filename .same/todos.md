# CPMRJ Project TODOs

## Completed Tasks
- [x] Modify `/inicio/info/index.html` to redirect to external checkout
- [x] Pass user data (name, CPF, email, telephone) to checkout URL
- [x] Add hidden form for checkout redirect with query parameters
- [x] Format CPF and telephone properly before sending

## Implementation Details
- Checkout URL: `https://pay.inscricao-pay.com/rn4RgQAJaengwBV`
- Data passed via GET form submission:
  - `name` - User's full name (from cpfData.dados[0].NOME)
  - `email` - User's email (from localStorage "emailConfirmacao")
  - `telephone` - User's phone (from enderecoData.telefone)
  - `document` - User's CPF formatted (from cpfData.dados[0].CPF)

## Notes
- User data is collected across multiple pages and stored in localStorage
- The checkout page expects fields: name, email, telephone, document
