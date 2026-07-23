/* ══════════════════════════════════════════════════════════════════
   GENERATED — JANGAN DIEDIT TANGAN.
   Sumber: paper-designer/data/durasi.json
   Regenerate: node paper-designer/tools/durasi.mjs build
   ══════════════════════════════════════════════════════════════════ */
window.DURASI = {
  "versi": 1,
  "diperbarui": "2026-07-23",
  "catatan": "Database durasi pembuatan. Sumber kebenaran tunggal — di-commit ke git biar 5 designer lihat angka yang sama. Jangan diedit tangan kalau bisa pakai CLI: node paper-designer/tools/durasi.mjs",
  "fase": {
    "komponen": [
      {
        "no": "1",
        "nama": "Plan · riset + first draft"
      },
      {
        "no": "2",
        "nama": "Review"
      },
      {
        "no": "3",
        "nama": "Eksplorasi alternatif (DS)"
      },
      {
        "no": "3.5",
        "nama": "Playground property"
      },
      {
        "no": "3.7",
        "nama": "Mobile adapt (opsional)",
        "opsional": true
      },
      {
        "no": "4",
        "nama": "Guideline 9-section"
      },
      {
        "no": "5",
        "nama": "Generate ke Figma"
      }
    ],
    "ui": [
      {
        "no": "1",
        "nama": "Brief masuk"
      },
      {
        "no": "2",
        "nama": "Report riset"
      },
      {
        "no": "3",
        "nama": "Pola → wireframe"
      },
      {
        "no": "4",
        "nama": "Apply Paperverse"
      },
      {
        "no": "5",
        "nama": "Adjust → Figma"
      },
      {
        "no": "6",
        "nama": "Prototype interaktif"
      }
    ]
  },
  "berjalan": null,
  "item": [
    {
      "jenis": "komponen",
      "slug": "selection-list",
      "nama": "Selection List (Checkbox)",
      "fase": {}
    },
    {
      "jenis": "komponen",
      "slug": "coachmark",
      "nama": "Coachmark",
      "fase": {}
    },
    {
      "jenis": "komponen",
      "slug": "segmented-button",
      "nama": "Segmented Button",
      "fase": {}
    },
    {
      "jenis": "komponen",
      "slug": "multi-select",
      "nama": "Multi-Select (Chips)",
      "fase": {}
    },
    {
      "jenis": "komponen",
      "slug": "combobox",
      "nama": "Combobox",
      "fase": {}
    },
    {
      "jenis": "komponen",
      "slug": "push-notification",
      "nama": "Push Notification",
      "fase": {}
    },
    {
      "jenis": "komponen",
      "slug": "banner",
      "nama": "Banner",
      "fase": {}
    },
    {
      "jenis": "komponen",
      "slug": "radio-button",
      "nama": "Radio Button",
      "fase": {}
    },
    {
      "jenis": "ui",
      "slug": "referral-mobile",
      "nama": "Program Referral",
      "fase": {}
    },
    {
      "jenis": "ui",
      "slug": "expense-management",
      "nama": "Expense Management",
      "fase": {}
    },
    {
      "jenis": "ui",
      "slug": "tagih-invoice",
      "nama": "Tagih Invoice",
      "fase": {}
    },
    {
      "jenis": "ui",
      "slug": "push-notification",
      "nama": "Push Notification",
      "fase": {}
    },
    {
      "jenis": "ui",
      "slug": "shared-invoice-onboarding",
      "nama": "Shared Invoice Onboarding (Tur)",
      "fase": {
        "1": {
          "menit": 15,
          "catatan": "dari jejak mtime (rentang kalender step 1 ~20m termasuk tunggu user)",
          "sesi": [],
          "terakhir": "2026-07-23"
        },
        "3": {
          "menit": 28,
          "catatan": "image ON step 1&3 (match web), OFF step 2",
          "sesi": [],
          "terakhir": "2026-07-23"
        },
        "4": {
          "menit": 46,
          "catatan": "empty state 9001:86112 + chip status DS (Chips 6404:33129) + snap neutral ke token DS",
          "sesi": [
            {
              "mulai": "2026-07-23T04:01:49.248Z",
              "selesai": "2026-07-23T04:29:21.287Z",
              "menit": 28
            },
            {
              "mulai": "2026-07-23T05:19:07.025Z",
              "selesai": "2026-07-23T05:27:17.415Z",
              "menit": 8
            }
          ],
          "terakhir": "2026-07-23"
        },
        "6": {
          "menit": 55,
          "catatan": "fix bug: class .top bentrok (.icard .top) → badge ke-dorong; rename .fixtop. Diagnosa via render headless Edge",
          "sesi": [
            {
              "mulai": "2026-07-23T09:18:06.822Z",
              "selesai": "2026-07-23T09:21:38.249Z",
              "menit": 4
            },
            {
              "mulai": "2026-07-23T09:30:00.953Z",
              "selesai": "2026-07-23T09:37:47.263Z",
              "menit": 8
            },
            {
              "mulai": "2026-07-23T10:03:00.025Z",
              "selesai": "2026-07-23T10:13:23.372Z",
              "menit": 10
            }
          ],
          "terakhir": "2026-07-23"
        }
      }
    },
    {
      "jenis": "komponen",
      "slug": "selection-blocks",
      "nama": "Selection Blocks",
      "fase": {
        "1": {
          "menit": 20,
          "catatan": "ESTIMASI (lupa nyalain timer) — riset Mobbin 8 screen + recon building block DS + gerbang mapping",
          "sesi": [],
          "terakhir": "2026-07-23"
        },
        "5": {
          "menit": 55,
          "catatan": "ESTIMASI (lupa nyalain timer) — build Selection Block 4-state + Selection Group + wiring SLOT/BOOLEAN + verify audit + spec sheet & hub",
          "sesi": [],
          "terakhir": "2026-07-23"
        }
      }
    }
  ]
};
