from odoo import models, fields, api

class book(models.Model):
    _name = 'library.book'
    _rec_name = 'title'

    title = fields.Char("Título",size=128, required=True)
    image = fields.Binary('Imagen')
    isbn = fields.Char("ISBN",size=16)
    npage = fields.Integer("Nº de páginas")
    type = fields.Selection([('fantasia','Novela fantástica'), 
                             ('historia', 'Ensayo historico')],
                            'Genero')
    author_ids =  fields.Many2many(
        string='Autores',
        comodel_name='library.author',
    )
    
    
    
    