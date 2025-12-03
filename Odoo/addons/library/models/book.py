from odoo import models, fields, api

class book(models.Model):
    _name = 'library.book'
    _rec_name = 'title'

    title = fields.Char("Título",size=128)
    image = fields.Binary('Imagen')
    isbn = fields.Char("ISBN",size=16)
    npage = fields.Integer("Nº de páginas")
    type = fields.Selection([('fantasia','Novela fantástica'), 
                             ('historia', 'Ensayo historico')],
                            'Genero')
    
    editorial_id = fields.Many2one("library.editorial","Editoriales")

    author_ids = fields.Many2Many("library.book",
                                  string="Autores",# relation="library_book_library_partner_rel" #opcional
                                  )