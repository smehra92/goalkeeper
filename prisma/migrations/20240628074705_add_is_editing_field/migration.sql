-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Stuff" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "post" TEXT NOT NULL,
    "isEditing" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Stuff" ("createdAt", "id", "post") SELECT "createdAt", "id", "post" FROM "Stuff";
DROP TABLE "Stuff";
ALTER TABLE "new_Stuff" RENAME TO "Stuff";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
