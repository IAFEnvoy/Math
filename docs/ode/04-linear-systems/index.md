---
sidebar_position: 1
---

# 线性方程组与基解矩阵

将单个标量 ODE 推广到高维向量方程，核心工具是**基解矩阵**——它统一了齐次通解的表达，并通过**常数变易法**给出非齐次方程的通解公式。

```mermaid
graph TB
    Sys["线性方程组<br/>X' = A(t)X + f(t)"]
    Sys -->|f=0| Hom[齐次方程<br/>X' = A(t)X]
    Sys -->|f≠0| NonHom[非齐次方程]
    Hom -->|n 个线性无关解| Phi["基解矩阵 Φ(t)<br/>Wronskian ≠ 0"]
    Phi -->|齐次通解| HomSol["X_h = Φ(t)·C"]
    NonHom -->|常数变易法| VarConst["X = Φ(t)·∫Φ⁻¹(t)·f(t) dt"]
```

## 子主题

- [基解矩阵与齐次通解](./fundamental-matrix.md)
- [常数变易法](./variation-of-constants.md)
