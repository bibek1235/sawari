--Up
ALTER TABLE News ADD COLUMN slug TEXT;
ALTER TABLE News ADD COLUMN publish INTEGER;
ALTER TABLE News ADD COLUMN deleteStatus INTEGER;
ALTER TABLE News ADD COLUMN remarks INTEGER;
-- Down
