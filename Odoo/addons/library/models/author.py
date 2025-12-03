from odoo import models, fields, api

class author(models.Model):
    _name = "library.author"

    name = fields.Char("Nombre",size=64, required=True, readonly=False)
    nationality = fields.Many2one("res.country","Nacionalidad")
    birthday = fields.Date("Fecha de nacimiento", size=16)

    book_ids = fields.Many2Many("library.author",
                                 string="Libros",
                                 #relation="library_book_library_partner_rel"#opcional
                                 )