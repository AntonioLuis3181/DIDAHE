from odoo import models, fields, api

class editorial(models.Model):
    _name = "library.editorial"

    name = fields.Char("Editorial",size=64, required=True)