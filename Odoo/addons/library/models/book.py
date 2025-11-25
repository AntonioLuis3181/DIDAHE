from odoo import models, fields, api

class book(models.Model):
    _name = 'library.book'

    title = fields.Char("Título",size=128)
    image = fields.Binary('Imagen')
    isbn = fields.Char("ISBN",size=16)
    npage = fields.Integer("Nº de páginas")
    type = fields.Selection([('fantasia','Novela fantástica'), 
                             ('historia', 'Ensayo historico')],
                            'Genero')