---
sidebar_position: 1
---

# 多项式

多项式是高等代数的起点。从数域和带余除法出发，逐步建立整除理论、最大公因式、因式分解唯一性、重因式判定，以及复/实/有理系数多项式的特殊性质。

```mermaid
graph TB
    Poly["多项式环 P⟨x⟩"] -->|带余除法| DivAlg[带余除法<br/>f = gq + r]
    DivAlg -->|理论基础| GCD[最大公因式<br/>辗转相除法]
    DivAlg -->|不可约分解| Factor[因式分解唯一性]
    Factor -->|形式导数| Multi[重因式判定]
    Poly -->|系数域| Coeff[复/实/有理系数]
    Coeff -->|代数基本定理| C[复数域：一次因式分解]
    Coeff -->|虚根共轭| R[实数域：至多二次不可约]
    Coeff -->|Eisenstein| Q[有理数域：判别法]
```

## 子主题

- [数域与带余除法](./division-algorithm.md)
- [最大公因式与因式分解](./gcd-factorization.md)
- [重因式与有理系数判别](./repeated-roots-eisenstein.md)
