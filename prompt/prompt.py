from DB.Query import get_all_data

def build_system_prompt():
    """
    Construit le prompt système en ajoutant
    les données provenant de la base PostgreSQL.
    """

    database = get_all_data()

    prompt = f"""
Tu es un assistant IA professionnel.

Tu aides les utilisateurs en répondant uniquement à partir des données
présentes dans la base de données suivante.

Si l'information n'existe pas dans la base,
réponds simplement :

"Je ne trouve pas cette information dans la base de données."

Base de données :

{database}

Réponds toujours en français.
"""

    return prompt