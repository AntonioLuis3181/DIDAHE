from odoo import models, fields, api

class author(models.Model):
    _name = 'library.author'

    name = fields.Char("Nombre",size=64, required=True)
    nationality = fields.Many2one("res.country","Nacionalidad")
    birthdate = fields.Date('Fecha de nacimiento')

    book_ids = fields.Many2many(
        string='Libros',
        comodel_name='library.book',
    )