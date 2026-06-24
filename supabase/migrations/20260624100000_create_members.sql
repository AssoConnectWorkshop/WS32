create table ws32_members (
  id bigint generated always as identity primary key,
  nom text not null,
  prenom text not null,
  role text not null,
  created_at timestamptz default now()
);

insert into ws32_members (nom, prenom, role) values
  ('Dupont',    'Marie',    'Présidente'),
  ('Martin',    'Luc',      'Trésorier'),
  ('Bernard',   'Sophie',   'Secrétaire'),
  ('Leroy',     'Antoine',  'Responsable communication'),
  ('Moreau',    'Claire',   'Membre actif'),
  ('Simon',     'Thomas',   'Membre actif'),
  ('Laurent',   'Isabelle', 'Responsable événements'),
  ('Petit',     'Julien',   'Membre actif');
