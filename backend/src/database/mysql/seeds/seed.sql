/* ===================== 1) AUTHENTIFICATION (45) ===================== */
/* colonnes attendues: id, email, password_hash, role, is_active, created_at, firstname, lastname */

INSERT INTO authentification
(id, email, password_hash, role, is_active, created_at, firstname, lastname) VALUES
-- Admins (1..15)
(1,'sophie.martin@mairie-lyon.fr','$2y$10$admS0ph13mart1n','admin',1,'2025-09-15 08:10:00','Sophie','Martin'),
(2,'lucas.bernard@mairie-lyon.fr','$2y$10$admLuC45b3rn4rd','admin',1,'2025-09-15 08:12:00','Lucas','Bernard'),
(3,'emma.dubois@mairie-lyon.fr','$2y$10$admEmm4dub01s','admin',1,'2025-09-15 08:14:00','Emma','Dubois'),
(4,'hugo.laurent@mairie-lyon.fr','$2y$10$admHu90l4ur3nt','admin',1,'2025-09-15 08:16:00','Hugo','Laurent'),
(5,'chloe.moreau@mairie-lyon.fr','$2y$10$admChl03mor34u','admin',1,'2025-09-15 08:18:00','Chloé','Moreau'),
(6,'nathan.lefevre@mairie-lyon.fr','$2y$10$admN4th4nl3f3vr3','admin',1,'2025-09-15 08:20:00','Nathan','Lefèvre'),
(7,'camille.robert@mairie-lyon.fr','$2y$10$admC4m1ll3rob3rt','admin',1,'2025-09-15 08:22:00','Camille','Robert'),
(8,'louis.petit@mairie-lyon.fr','$2y$10$admL0u15p3t1t','admin',1,'2025-09-15 08:24:00','Louis','Petit'),
(9,'manon.garcia@mairie-lyon.fr','$2y$10$admM4n0ng4rc14','admin',1,'2025-09-15 08:26:00','Manon','Garcia'),
(10,'arthur.rousseau@mairie-lyon.fr','$2y$10$adm4rthur0uss34u','admin',1,'2025-09-15 08:28:00','Arthur','Rousseau'),
(11,'lea.fontaine@mairie-lyon.fr','$2y$10$admL34f0nt41n3','admin',1,'2025-09-15 08:30:00','Léa','Fontaine'),
(12,'maxime.blanchard@mairie-lyon.fr','$2y$10$admM4x1m3bl4nch','admin',1,'2025-09-15 08:32:00','Maxime','Blanchard'),
(13,'sarah.muller@mairie-lyon.fr','$2y$10$admS4r4hmull3r','admin',1,'2025-09-15 08:34:00','Sarah','Müller'),
(14,'thomas.caron@mairie-lyon.fr','$2y$10$admTh0m4sc4r0n','admin',1,'2025-09-15 08:36:00','Thomas','Caron'),
(15,'ines.lemaire@mairie-lyon.fr','$2y$10$adm1n3sl3m41r3','admin',1,'2025-09-15 08:38:00','Inès','Lemaire'),
-- Agents (16..30)
(16,'julien.lambert@metropole-lyon.fr','$2y$10$agJuli3nl4mb3rt','agent',1,'2025-09-15 08:40:00','Julien','Lambert'),
(17,'clara.renaud@metropole-lyon.fr','$2y$10$agCl4r4r3n4ud','agent',1,'2025-09-15 08:41:00','Clara','Renaud'),
(18,'mehdi.benali@metropole-lyon.fr','$2y$10$agM3hd1b3n4l1','agent',1,'2025-09-15 08:42:00','Mehdi','Benali'),
(19,'pauline.gauthier@metropole-lyon.fr','$2y$10$agP4ul1n3g4uth','agent',1,'2025-09-15 08:43:00','Pauline','Gauthier'),
(20,'yohan.perrot@metropole-lyon.fr','$2y$10$agY0h4np3rr0t','agent',1,'2025-09-15 08:44:00','Yohan','Perrot'),
(21,'amandine.renard@metropole-lyon.fr','$2y$10$agAm4nd1n3r3n','agent',1,'2025-09-15 08:45:00','Amandine','Renard'),
(22,'karim.bensaid@metropole-lyon.fr','$2y$10$agK4r1mb3ns41d','agent',1,'2025-09-15 08:46:00','Karim','Bensaïd'),
(23,'baptiste.marchand@metropole-lyon.fr','$2y$10$agB4pt1stm4rch','agent',1,'2025-09-15 08:47:00','Baptiste','Marchand'),
(24,'aicha.khelifi@metropole-lyon.fr','$2y$10$ag41ch4kh3l1f1','agent',1,'2025-09-15 08:48:00','Aïcha','Khelifi'),
(25,'quentin.noel@metropole-lyon.fr','$2y$10$agQu3nt1nn03l','agent',1,'2025-09-15 08:49:00','Quentin','Noël'),
(26,'melanie.colin@metropole-lyon.fr','$2y$10$agM3l4n13c0l1n','agent',1,'2025-09-15 08:50:00','Mélanie','Colin'),
(27,'yassine.haddad@metropole-lyon.fr','$2y$10$agY4551n3h4dd4d','agent',1,'2025-09-15 08:51:00','Yassine','Haddad'),
(28,'marine.pires@metropole-lyon.fr','$2y$10$agM4r1n3p1r3s','agent',1,'2025-09-15 08:52:00','Marine','Pires'),
(29,'pierre.dupont@metropole-lyon.fr','$2y$10$agP13rr3dup0nt','agent',1,'2025-09-15 08:53:00','Pierre','Dupont'),
(30,'nora.cherif@metropole-lyon.fr','$2y$10$agN0r4ch3r1f','agent',1,'2025-09-15 08:54:00','Nora','Chérif'),
-- Citoyens (31..45)
(31,'elodie.martinot@mail.com','$2y$10$ctEl0d13m4rt1n0t','citizen',1,'2025-09-16 09:00:00','Élodie','Martinot'),
(32,'romain.pelletier@mail.com','$2y$10$ctR0m41np3ll3t13r','citizen',1,'2025-09-16 09:01:00','Romain','Pelletier'),
(33,'fatima.elamrani@mail.com','$2y$10$ctF4t1m4z3l4mr4n1','citizen',1,'2025-09-16 09:02:00','Fatima Zahra','El Amrani'),
(34,'antoine.vidal@mail.com','$2y$10$ctAnt01n3v1d4l','citizen',1,'2025-09-16 09:03:00','Antoine','Vidal'),
(35,'sarah.cohen@mail.com','$2y$10$ctS4r4hc0h3n','citizen',1,'2025-09-16 09:04:00','Sarah','Cohen'),
(36,'jeremy.lopez@mail.com','$2y$10$ctJ3r3myl0p3z','citizen',1,'2025-09-16 09:05:00','Jérémy','Lopez'),
(37,'aurore.nguyen@mail.com','$2y$10$ct4ur0r3nguY3n','citizen',1,'2025-09-16 09:06:00','Aurore','Nguyen'),
(38,'mohamed.ali@mail.com','$2y$10$ctM0h4m3d4l1','citizen',1,'2025-09-16 09:07:00','Mohamed','Ali'),
(39,'julie.henry@mail.com','$2y$10$cTJuli3h3nry','citizen',1,'2025-09-16 09:08:00','Julie','Henry'),
(40,'adrien.girard@mail.com','$2y$10$ct4dr13ng1r4rd','citizen',1,'2025-09-16 09:09:00','Adrien','Girard'),
(41,'nadia.rahmani@mail.com','$2y$10$ctN4d14r4hm4n1','citizen',1,'2025-09-16 09:10:00','Nadia','Rahmani'),
(42,'victor.morel@mail.com','$2y$10$ctV1ct0rm0r3l','citizen',1,'2025-09-16 09:11:00','Victor','Morel'),
(43,'imane.bouzid@mail.com','$2y$10$ct1m4n3b0uz1d','citizen',1,'2025-09-16 09:12:00','Imane','Bouzid'),
(44,'pascal.leroy@mail.com','$2y$10$ctP4sc4ll3r0y','citizen',1,'2025-09-16 09:13:00','Pascal','Leroy'),
(45,'amelie.charvet@mail.com','$2y$10$ct4m3l13ch4rv3t','citizen',1,'2025-09-16 09:14:00','Amélie','Charvet');

/* ===================== 2) USER (45) ===================== */
/* colonnes: id, auth_id, pseudo, district, loyalty_points */

INSERT INTO user (id, auth_id, pseudo, district, loyalty_points) VALUES
(31,31,'elodie.mt','Lyon 7e',30),
(32,32,'romain.pl','Lyon 9e',28),
(33,33,'fatima.ea','Villeurbanne',26),
(34,34,'antoine.vd','Lyon 3e',25),
(35,35,'sarah.coh','Lyon 6e',24),
(36,36,'jeremy.lpz','Lyon 8e',23),
(37,37,'aurore.ng','Lyon 1er',22),
(38,38,'mohamed.ali','Vaulx-en-Velin',21),
(39,39,'julie.hn','Lyon 2e',20),
(40,40,'adrien.gr','Ouest Lyonnais',19),
(41,41,'nadia.rh','Bron',18),
(42,42,'victor.mr','Lyon 5e',17),
(43,43,'imane.bz','Lyon 7e',16),
(44,44,'pascal.lr','Lyon 3e',15),
(45,45,'amelie.cv','Lyon 9e',14);


/* ===================== 3) ADMIN (15) ===================== */
/* colonnes: user_id (PK/FK -> user.id), center_id */
INSERT INTO admin (user_id, center_id) VALUES
   (1,5),(2,1),(3,3),(4,4),(5,9),
   (6,2),(7,1),(8,10),(9,6),(10,3),
   (11,3),(12,1),(13,5),(14,10),(15,9);

/* ===================== 4) AGENT (15) ===================== */
/* colonnes: user_id, agent_number, created_by (admin.user_id), center_id, team_id, sector */
INSERT INTO agent (user_id, agent_number, created_by, center_id, team_id, sector) VALUES
      (16,'AG-69001','1',1,301,'Gerland A'),
      (17,'AG-69002','2',2,302,'Vaise B'),
      (18,'AG-69003','3',8,308,'Vénissieux Parc'),
      (19,'AG-69004','3',3,303,'Part-Dieu C'),
      (20,'AG-69005','4',5,305,'Confluence Docks'),
      (21,'AG-69006','5',6,306,'Villeurbanne Centre'),
      (22,'AG-69007','6',7,307,'Vaulx La Soie'),
      (23,'AG-69008','7',4,304,'Croix-Rousse Pentes'),
      (24,'AG-69009','8',9,309,'Bron Fort'),
      (25,'AG-69010','9',6,306,'Gratte-Ciel'),
      (26,'AG-69011','10',4,304,'Plateau'),
      (27,'AG-69012','11',10,310,'Ouest Vallonné'),
      (28,'AG-69013','12',10,311,'Tassin'),
      (29,'AG-69014','13',3,303,'Préfecture'),
      (30,'AG-69015','14',2,302,'Gorge de Loup');


/* ===================== 5) BADGE (15) ===================== */
INSERT INTO badge (id, name, description, image_url) VALUES
    (1,'Éco-Citoyen','A signalé 3 dépôts sauvages','/img/badges/eco-citoyen.png'),
    (2,'Reporter Express','Création de signalement < 60s','/img/badges/reporter-express.png'),
    (3,'Quartier Propre','5 signalements résolus','/img/badges/quartier-propre.png'),
    (4,'Ambassadeur Tri','Participe aux campagnes de tri','/img/badges/amb-tri.png'),
    (5,'Zéro Papier','Préférence notifications numériques','/img/badges/zero-papier.png'),
    (6,'Équipe Gold','Agent avec 50 interventions','/img/badges/equipe-gold.png'),
    (7,'Sans Faute','Aucune réclamation sur 10 interventions','/img/badges/sans-faute.png'),
    (8,'Réactif','Temps de prise en charge < 2h','/img/badges/reactif.png'),
    (9,'Sécurité+','Formation EPI validée','/img/badges/securite-plus.png'),
    (10,'Marathonien','Tournée > 25 km','/img/badges/marathonien.png'),
    (11,'Photo Pro','Ajout de preuves photo','/img/badges/photo-pro.png'),
    (12,'Propreté Scolaire','Interventions autour des écoles','/img/badges/ecoles.png'),
    (13,'Recyclage+','Tri sélectif exemplaire','/img/badges/recyclage-plus.png'),
    (14,'Médiateur','A géré un conflit usager','/img/badges/mediateur.png'),
    (15,'Héros Pluie','Interventions par temps pluvieux','/img/badges/heros-pluie.png');

/* ===================== 6) USER_BADGE (15) ===================== */
/* un mix agents/citoyens pour tests */
INSERT INTO user_badge (user_id, badge_id, obtained_at) VALUES
    (31,1,'2025-09-20'),
    (31,2,'2025-09-21'),
    (16,6,'2025-09-22'),
    (16,8,'2025-09-25'),
    (17,9,'2025-09-26'),
    (18,10,'2025-09-27'),
    (19,7,'2025-09-28'),
    (20,8,'2025-10-01'),
    (22,9,'2025-10-02'),
    (23,11,'2025-10-02'),
    (24,12,'2025-10-03'),
    (25,13,'2025-10-03'),
    (26,14,'2025-10-04'),
    (33,3,'2025-10-04'),
    (34,5,'2025-10-05');
