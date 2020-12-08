import os
from backend import app
from backend.models import (
    db,
    Admin,
    Menu_Item,
    Sauce,
    Rub
)
from backend.api.auth import set_password

u_name = os.environ.get("ADMIN_USERNAME")
e_mail = os.environ.get("ADMIN_EMAIL")
hash = set_password(os.environ.get("ADMIN_PASSWORD"))
f_name = os.environ.get("ADMIN_FIRST_NAME")
l_name = os.environ.get("ADMIN_LAST_NAME")

with app.app_context():
    db.drop_all()
    db.create_all()

    Admin = Admin(
        username=u_name,
        email=e_mail,
        hashed_password=hash,
        firstname=f_name,
        lastname=l_name,
    )
    db.session.add(Admin)
    hot_wing_nachos = Menu_Item(
        name="Hot Wing Nachos",
        description="Tortilla chips, house-made queso, crispy chicken, \
          buffalo sauce, jalapeño ranch, pico, cilantro, queso fresco \
          crumbles",
        price="11",
        item_type="kitchen"
    )
    db.session.add(hot_wing_nachos)
    fried_chicken_bbq_nachos = Menu_Item(
        name="Fried Chicken BBQ Nachos",
        description="Tortilla chips, house-made queso, crispy chicken, \
          Bluff City BBQ sauce, Alabama White BBQ sauce, Backyard BBQ \
          seasoning, and pickled jalapeños",
        price="11",
        item_type="kitchen"
    )
    db.session.add(fried_chicken_bbq_nachos)
    smokehouse_loaded_fries = Menu_Item(
        name="Smokehouse Loaded Fries",
        description="Fries stacked high with house-made queso, bacon \
          crumbles, pico de gallo, ancho chipotle sauce, queso fresco \
          crumbles, and scallions",
        price="12",
        item_type="kitchen"
    )
    db.session.add(smokehouse_loaded_fries)
    buffalo_chicken_taco = Menu_Item(
        name="Buffalo Chicken Taco",
        description="Flour tortilla, crispy chicken tossed in buffalo \
          sauce, lettuce, shredded cheese, pico, jalapeño ranch",
        price="4",
        item_type="kitchen"
    )
    db.session.add(buffalo_chicken_taco)
    avocado_taco = Menu_Item(
        name="Avocado Taco",
        description="(Vegan) Flour tortilla, fried or raw avocado, red \
          cabbage, pico, pineapple, cilantro, bang bang sauce (gluten \
          free upon request)",
        price="5",
        item_type="kitchen"
    )
    db.session.add(avocado_taco)
    memphis_buffalo_chicken_sliders = Menu_Item(
        name="Memphis Buffalo Chicken Sliders (3)",
        description="King’s Hawaiian roll, crispy chicken tossed in \
          our signature Memphis Buffalo sauce, pepper jack cheese, \
          pickles, jalapeño ranch",
        price="10",
        item_type="kitchen"
    )
    db.session.add(memphis_buffalo_chicken_sliders)
    kid_meal = Menu_Item(
        name="Marie's Kid's Meal",
        description="4 piece chicken nuggets, classic fries, carrots, \
          roll, and dipping sauce",
        price="7",
        item_type="kitchen"
    )
    db.session.add(kid_meal)
    classic_fries = Menu_Item(
        name="Classic Fries",
        price="3",
        item_type="side"
    )
    db.session.add(classic_fries)
    premium_fries = Menu_Item(
        name="Premium Fries",
        description="Garlic parmesan, cajun, lemon pepper, Nikki’s Hot™",
        price="4",
        item_type="side"
    )
    db.session.add(premium_fries)
    nikki_chips = Menu_Item(
        name="Nikki's Chips",
        price="1",
        item_type="side"
    )
    db.session.add(nikki_chips)
    grind_city_gold = Sauce(
        name="Grind City Gold",
        heat=0
    )
    db.session.add(grind_city_gold)
    tennessee_teriyaki = Sauce(
        name="Tennessee Teriyaki",
        heat=0
    )
    db.session.add(tennessee_teriyaki)
    bluff_city_bbq = Sauce(
        name="Bluff City BBQ",
        heat=0
    )
    db.session.add(bluff_city_bbq)
    alabama_white_bbq = Sauce(
        name="Alabama White BBQ",
        heat=0
    )
    db.session.add(alabama_white_bbq)
    memphis_buffalo = Sauce(
        name="Memphis Buffalo",
        heat=1
    )
    db.session.add(memphis_buffalo)
    cajun_honey_hot = Sauce(
        name="Cajun Honey Hot",
        heat=1
    )
    db.session.add(cajun_honey_hot)
    mud_island_jerk = Sauce(
        name="Mud Island Jerk",
        heat=1
    )
    db.session.add(mud_island_jerk)
    classic_buffalo = Sauce(
        name="Classic Buffalo",
        heat=2
    )
    db.session.add(classic_buffalo)
    honey_sriracha = Sauce(
        name="Honey Sriracha",
        heat=2
    )
    db.session.add(honey_sriracha)
    ja_sweet_heat = Sauce(
        name="Ja's Sweet Heat",
        heat=2
    )
    db.session.add(ja_sweet_heat)
    midtown_masala = Sauce(
        name="Midtown Masala",
        heat=2
    )
    db.session.add(midtown_masala)
    spicy_garlic = Sauce(
        name="Spicy Garlic",
        heat=2
    )
    db.session.add(spicy_garlic)
    hot_buffalo = Sauce(
        name="Hot Buffalo",
        heat=3
    )
    db.session.add(hot_buffalo)
    pineapple_habanero = Sauce(
        name="Pineapple Habanero",
        heat=3
    )
    db.session.add(pineapple_habanero)
    ring_of_fire = Sauce(
        name="Ring of Fire",
        heat=4
    )
    db.session.add(ring_of_fire)
    backyard_bbq = Rub(
        name="Backyard BBQ",
        heat=0
    )
    db.session.add(backyard_bbq)
    lemon_pepper = Rub(
        name="Lemon Pepper",
        heat=0
    )
    db.session.add(lemon_pepper)
    garlic_parmesan = Rub(
        name="Garlic Parmesan",
        heat=0
    )
    db.session.add(garlic_parmesan)
    riverside_ranch_mild = Rub(
        name="Riverside Ranch (mild)",
        heat=0
    )
    db.session.add(riverside_ranch_mild)
    riverside_ranch_hot = Rub(
        name="Riverside Ranch (hot)",
        heat=1
    )
    db.session.add(riverside_ranch_hot)
    ragin_cajun = Rub(
        name="Ragin' Cajun",
        heat=1
    )
    db.session.add(ragin_cajun)
    caribbean_heat = Rub(
        name="Caribbean Heat",
        heat=2
    )
    db.session.add(caribbean_heat)
    korean_kick = Rub(
        name="Korean Kick",
        heat=2
    )
    db.session.add(korean_kick)
    nikki_hot = Rub(
        name="Nikki's Hot™",
        heat=3
    )
    db.session.add(nikki_hot)

    db.session.commit()
